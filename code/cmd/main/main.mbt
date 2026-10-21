///|
/// TypeGate 命令行自检：演示引擎的 JSON Schema 校验、正则匹配与受约束解码能力。
/// 运行：`moon run cmd/main`（在项目根目录）。

fn main {
  println("=== TypeGate 引擎自检 ===")

  let schema = "{\"type\":\"object\",\"properties\":{\"city\":{\"type\":\"string\"},\"temp\":{\"type\":\"number\"}},\"required\":[\"city\"]}"
  let good = "{\"city\":\"Beijing\",\"temp\":25.5}"
  let bad = "{\"temp\":25.5}"

  println("Schema 校验（合法）: [" + @typegate.validate_json(schema, good) + "]")
  println("Schema 校验（缺字段）: [" + @typegate.validate_json(schema, bad) + "]")
  println("")

  println("正则 ^[a-z]+$ 匹配 hello: " + @typegate.regex_check("^[a-z]+$", "hello").to_string())
  println("正则 ^[a-z]+$ 匹配 Hello: " + @typegate.regex_check("^[a-z]+$", "Hello").to_string())
  println("")

  println("classify {\"a\":1} (应为2): " + @typegate.classify_json("{\"a\":1}").to_string())
  println("classify {\"a\": (应为1): " + @typegate.classify_json("{\"a\":").to_string())
  println("classify {\"a\":} (应为0): " + @typegate.classify_json("{\"a\":}").to_string())
  println("")

  println("{\"a\" 之后可接的字符: " + @typegate.next_chars("{\"a\""))
  println("自检完成。")
}
