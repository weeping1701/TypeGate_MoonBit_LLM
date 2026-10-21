// Blackbox tests for the TypeGate engine public API.

fn parse_ok(s : String) -> Bool {
  match @typegate.parse(s) {
    @typegate.ParseResult::Ok(_, _) => true
    @typegate.ParseResult::Err(_) => false
  }
}

test "parse basic object" {
  let src = "{\"name\":\"alice\",\"age\":30,\"tags\":[1,2,3],\"ok\":true,\"x\":null}"
  assert_true(parse_ok(src))
}

test "parse round-trip" {
  let src = "{\"a\":1,\"b\":\"x\",\"c\":[true,false,null],\"d\":{\"e\":2.5}}"
  match @typegate.parse(src) {
    @typegate.ParseResult::Ok(v, _) => assert_eq(@typegate.to_string(v), src)
    @typegate.ParseResult::Err(_) => assert_true(false)
  }
}

test "parse rejects invalid" {
  assert_true(!parse_ok("{\"a\":}"))
  assert_true(!parse_ok("[1,2"))
  assert_true(!parse_ok("{\"a\":1}x"))
  assert_true(!parse_ok("hello"))
}

test "parse handles escapes" {
  match @typegate.parse("\"a\\nb\\t\\\"c\"") {
    @typegate.ParseResult::Ok(@typegate.JsonValue::Str(s), _) => {
      assert_eq(s, "a\nb\t\"c")
    }
    _ => assert_true(false)
  }
}

test "regex literals and wildcards" {
  assert_true(@typegate.regex_match("abc", "abc"))
  assert_true(!@typegate.regex_match("abc", "abd"))
  assert_true(@typegate.regex_match("a.c", "abc"))
  assert_true(@typegate.regex_match("a.c", "axc"))
}

test "regex quantifiers" {
  assert_true(@typegate.regex_match("^a*b$", "aaab"))
  assert_true(@typegate.regex_match("^a*b$", "b"))
  assert_true(@typegate.regex_match("^a+b$", "aaab"))
  assert_true(!@typegate.regex_match("^a+b$", "b"))
  assert_true(@typegate.regex_match("^colou?r$", "color"))
  assert_true(@typegate.regex_match("^colou?r$", "colour"))
}

test "regex character class" {
  assert_true(@typegate.regex_match("^[a-z]+$", "hello"))
  assert_true(!@typegate.regex_match("^[a-z]+$", "Hello"))
  assert_true(@typegate.regex_match("^[0-9]+$", "12345"))
  assert_true(@typegate.regex_match("^[^0-9]+$", "abc"))
}

test "schema validate object" {
  let schema = @typegate.Schema::SObject(
    [("name", @typegate.Schema::SString), ("age", @typegate.Schema::SNumber)],
    ["name"]
  )
  match @typegate.parse("{\"name\":\"bob\",\"age\":20}") {
    @typegate.ParseResult::Ok(v, _) => assert_true(@typegate.validate(schema, v) is None)
    _ => assert_true(false)
  }
  match @typegate.parse("{\"age\":20}") {
    @typegate.ParseResult::Ok(v, _) => assert_true(@typegate.validate(schema, v) is Some(_))
    _ => assert_true(false)
  }
}

test "schema validate type mismatch" {
  let schema = @typegate.Schema::SNumber
  match @typegate.parse("\"not a number\"") {
    @typegate.ParseResult::Ok(v, _) => assert_true(@typegate.validate(schema, v) is Some(_))
    _ => assert_true(false)
  }
}

test "schema pattern constraint" {
  let schema = @typegate.Schema::SPattern("^[a-z]+$")
  match @typegate.parse("\"hello\"") {
    @typegate.ParseResult::Ok(v, _) => assert_true(@typegate.validate(schema, v) is None)
    _ => assert_true(false)
  }
  match @typegate.parse("\"Hello123\"") {
    @typegate.ParseResult::Ok(v, _) => assert_true(@typegate.validate(schema, v) is Some(_))
    _ => assert_true(false)
  }
}

test "classify states" {
  assert_eq(@typegate.classify("{\"a\":1}"), 2)
  assert_eq(@typegate.classify("{\"a\":"), 1)
  assert_eq(@typegate.classify("{\"a\":}"), 0)
  assert_eq(@typegate.classify(""), 1)
  assert_eq(@typegate.classify("[1,2,3]"), 2)
}

test "valid next chars" {
  let cs = @typegate.valid_next_chars("{\"a\"")
  assert_true(cs.contains(":"))
  let cs2 = @typegate.valid_next_chars("[")
  assert_true(cs2.contains("1") || cs2.contains("]"))
}
