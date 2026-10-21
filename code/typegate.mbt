///|
/// JSON 值模型与解析器 / 序列化器。
/// TypeGate 的核心数据表示：把任意 JSON 文本解析成 `JsonValue`，
/// 并支持序列化回字符串与结构相等判断。

pub enum JsonValue {
  Null
  Bool(Bool)
  Number(Double)
  Str(String)
  Arr(Array[JsonValue])
  Obj(Array[(String, JsonValue)])
}

///| 解析结果：成功时携带解析出的值与下一个字符下标，失败时携带错误信息。
pub enum ParseResult {
  Ok(JsonValue, Int)
  Err(String)
}

fn is_digit(c : UInt16) -> Bool {
  let n = c.to_int()
  n >= '0'.to_int() && n <= '9'.to_int()
}

fn ch_str(c : UInt16) -> String {
  Int::unsafe_to_char(c.to_int()).to_string()
}

fn hex_val(c : UInt16) -> Int {
  let n = c.to_int()
  if n >= '0'.to_int() && n <= '9'.to_int() {
    n - '0'.to_int()
  } else if n >= 'a'.to_int() && n <= 'f'.to_int() {
    n - 'a'.to_int() + 10
  } else if n >= 'A'.to_int() && n <= 'F'.to_int() {
    n - 'A'.to_int() + 10
  } else {
    0
  }
}

///| 解析入口：把字符串解析为 JsonValue。
pub fn parse(s : String) -> ParseResult {
  let i = skip_ws(s, 0)
  match parse_value(s, i) {
    Ok(v, j) => {
      let k = skip_ws(s, j)
      if k == s.length() {
        Ok(v, k)
      } else {
        Err("trailing characters after JSON value")
      }
    }
    Err(e) => Err(e)
  }
}

fn skip_ws(s : String, i : Int) -> Int {
  let mut k = i
  while k < s.length() {
    let c = s[k]
    if c == ' ' || c == '\t' || c == '\n' || c == '\r' {
      k = k + 1
    } else {
      break
    }
  }
  k
}

fn parse_value(s : String, i : Int) -> ParseResult {
  if i >= s.length() {
    Err("unexpected end of input")
  } else {
    let c = s[i]
    if c == '{' {
      parse_object(s, i)
    } else if c == '[' {
      parse_array(s, i)
    } else if c == '"' {
      parse_string(s, i)
    } else if c == 't' || c == 'f' || c == 'n' {
      parse_literal(s, i)
    } else if c == '-' || is_digit(c) {
      parse_number(s, i)
    } else {
      Err("unexpected character")
    }
  }
}

fn parse_object(s : String, i : Int) -> ParseResult {
  let mut k = i + 1
  let fields : Array[(String, JsonValue)] = []
  while true {
    k = skip_ws(s, k)
    if k >= s.length() {
      return Err("unterminated object")
    }
    if s[k] == '}' {
      return Ok(Obj(fields), k + 1)
    }
    match parse_string(s, k) {
      Ok(Str(key), j) => {
        k = skip_ws(s, j)
        if k >= s.length() || s[k] != ':' {
          return Err("expected ':' in object")
        }
        k = skip_ws(s, k + 1)
        match parse_value(s, k) {
          Ok(v, j2) => {
            fields.push((key, v))
            k = skip_ws(s, j2)
            if k < s.length() && s[k] == ',' {
              k = k + 1
            }
          }
          Err(e) => return Err(e)
        }
      }
      Ok(_, _) => return Err("object key must be string")
      Err(e) => return Err(e)
    }
  }
  Err("unreachable")
}

fn parse_array(s : String, i : Int) -> ParseResult {
  let mut k = i + 1
  let items : Array[JsonValue] = []
  while true {
    k = skip_ws(s, k)
    if k >= s.length() {
      return Err("unterminated array")
    }
    if s[k] == ']' {
      return Ok(Arr(items), k + 1)
    }
    match parse_value(s, k) {
      Ok(v, j) => {
        items.push(v)
        k = skip_ws(s, j)
        if k < s.length() && s[k] == ',' {
          k = k + 1
        }
      }
      Err(e) => return Err(e)
    }
  }
  Err("unreachable")
}

fn parse_string(s : String, i : Int) -> ParseResult {
  let mut k = i + 1
  let mut buf = ""
  while true {
    if k >= s.length() {
      return Err("unterminated string")
    }
    let c = s[k]
    if c == '"' {
      return Ok(Str(buf), k + 1)
    } else if c == '\\' {
      if k + 1 >= s.length() {
        return Err("bad escape")
      }
      let e = s[k + 1]
      if e == 'n' {
        buf = buf + "\n"
        k = k + 2
      } else if e == 't' {
        buf = buf + "\t"
        k = k + 2
      } else if e == 'r' {
        buf = buf + "\r"
        k = k + 2
      } else if e == 'b' {
        buf = buf + "\b"
        k = k + 2
      } else if e == 'f' {
        buf = buf + "\f"
        k = k + 2
      } else if e == '"' {
        buf = buf + "\""
        k = k + 2
      } else if e == '\\' {
        buf = buf + "\\"
        k = k + 2
      } else if e == '/' {
        buf = buf + "/"
        k = k + 2
      } else if e == 'u' {
        if k + 6 >= s.length() {
          return Err("bad unicode escape")
        }
        let hex = parse_hex4(s, k + 2)
        buf = buf + Int::unsafe_to_char(hex).to_string()
        k = k + 6
      } else {
        return Err("unknown escape")
      }
    } else {
      buf = buf + ch_str(c)
      k = k + 1
    }
  }
  Err("unreachable")
}

fn parse_literal(s : String, i : Int) -> ParseResult {
  if s.length() >= i + 4 {
    let t = s[i] == 't' && s[i + 1] == 'r' && s[i + 2] == 'u' && s[i + 3] == 'e'
    if t {
      return Ok(Bool(true), i + 4)
    }
    if s[i] == 'n' && s[i + 1] == 'u' && s[i + 2] == 'l' && s[i + 3] == 'l' {
      return Ok(Null, i + 4)
    }
  }
  if s.length() >= i + 5 {
    if s[i] == 'f' && s[i + 1] == 'a' && s[i + 2] == 'l' && s[i + 3] == 's' && s[i + 4] == 'e' {
      return Ok(Bool(false), i + 5)
    }
  }
  Err("invalid literal")
}

fn parse_number(s : String, i : Int) -> ParseResult {
  let mut k = i
  let mut buf = ""
  while k < s.length() {
    let c = s[k]
    if is_digit(c) || c == '-' || c == '+' || c == '.' || c == 'e' || c == 'E' {
      buf = buf + ch_str(c)
      k = k + 1
    } else {
      break
    }
  }
  Ok(Number(str_to_double(buf)), k)
}

///| 手工把数字字符串解析成 Double（避免依赖外部字符串转换）。
fn str_to_double(s : String) -> Double {
  let n = s.length()
  let mut i = 0
  let mut neg = 1.0
  if i < n && s[i] == '-' {
    neg = -1.0
    i = i + 1
  } else if i < n && s[i] == '+' {
    i = i + 1
  }
  let mut int_part = 0.0
  while i < n && is_digit(s[i]) {
    int_part = int_part * 10.0 + (s[i].to_int() - '0'.to_int()).to_double()
    i = i + 1
  }
  let mut frac_part = 0.0
  let mut frac_scale = 1.0
  if i < n && s[i] == '.' {
    i = i + 1
    while i < n && is_digit(s[i]) {
      frac_part = frac_part * 10.0 + (s[i].to_int() - '0'.to_int()).to_double()
      frac_scale = frac_scale * 10.0
      i = i + 1
    }
  }
  let mut value = int_part + frac_part / frac_scale
  if i < n && (s[i] == 'e' || s[i] == 'E') {
    i = i + 1
    let mut exp_neg = false
    if i < n && s[i] == '-' {
      exp_neg = true
      i = i + 1
    } else if i < n && s[i] == '+' {
      i = i + 1
    }
    let mut exp = 0
    while i < n && is_digit(s[i]) {
      exp = exp * 10 + (s[i].to_int() - '0'.to_int())
      i = i + 1
    }
    let mut mult = 1.0
    let mut c = 0
    while c < exp {
      mult = mult * 10.0
      c = c + 1
    }
    if exp_neg {
      value = value / mult
    } else {
      value = value * mult
    }
  }
  value * neg
}

fn parse_hex4(s : String, i : Int) -> Int {
  let mut v = 0
  let mut k = i
  while k < i + 4 {
    v = v * 16 + hex_val(s[k])
    k = k + 1
  }
  v
}

///| 序列化：把 JsonValue 转回紧凑的 JSON 字符串。
pub fn to_string(v : JsonValue) -> String {
  match v {
    Null => "null"
    Bool(b) => if b { "true" } else { "false" }
    Number(d) => d.to_string()
    Str(s) => "\"" + escape_string(s) + "\""
    Arr(items) => arr_to_str(items)
    Obj(fields) => obj_to_str(fields)
  }
}

fn arr_to_str(items : Array[JsonValue]) -> String {
  let mut buf = "["
  let mut i = 0
  while i < items.length() {
    if i == 0 {
      buf = buf + to_string(items[i])
    } else {
      buf = buf + "," + to_string(items[i])
    }
    i = i + 1
  }
  buf + "]"
}

fn obj_to_str(fields : Array[(String, JsonValue)]) -> String {
  let mut buf = "{"
  let mut i = 0
  while i < fields.length() {
    let (k, v) = fields[i]
    if i == 0 {
      buf = buf + "\"" + escape_string(k) + "\":" + to_string(v)
    } else {
      buf = buf + ",\"" + escape_string(k) + "\":" + to_string(v)
    }
    i = i + 1
  }
  buf + "}"
}

fn escape_string(s : String) -> String {
  let mut buf = ""
  let mut i = 0
  while i < s.length() {
    let c = s[i]
    if c == '"' {
      buf = buf + "\\\""
    } else if c == '\\' {
      buf = buf + "\\\\"
    } else if c == '\n' {
      buf = buf + "\\n"
    } else if c == '\t' {
      buf = buf + "\\t"
    } else if c == '\r' {
      buf = buf + "\\r"
    } else {
      buf = buf + ch_str(c)
    }
    i = i + 1
  }
  buf
}

///| 结构相等判断（用于测试与校验）。
pub fn equals(a : JsonValue, b : JsonValue) -> Bool {
  match (a, b) {
    (Null, Null) => true
    (Bool(x), Bool(y)) => x == y
    (Number(x), Number(y)) => x == y
    (Str(x), Str(y)) => x == y
    (Arr(x), Arr(y)) => arr_equals(x, y)
    (Obj(x), Obj(y)) => obj_equals(x, y)
    _ => false
  }
}

fn arr_equals(a : Array[JsonValue], b : Array[JsonValue]) -> Bool {
  if a.length() != b.length() {
    false
  } else {
    let mut i = 0
    let mut ok = true
    while i < a.length() && ok {
      if !equals(a[i], b[i]) {
        ok = false
      }
      i = i + 1
    }
    ok
  }
}

fn obj_equals(a : Array[(String, JsonValue)], b : Array[(String, JsonValue)]) -> Bool {
  if a.length() != b.length() {
    false
  } else {
    let mut i = 0
    let mut ok = true
    while i < a.length() && ok {
      let (ka, va) = a[i]
      let (kb, vb) = b[i]
      if ka != kb || !equals(va, vb) {
        ok = false
      }
      i = i + 1
    }
    ok
  }
}
