///|
/// 面向 JS / WASM 宿主的高层 API（字符串进、字符串/布尔/整数出）。
/// 前端只需调用这些导出函数，无需构造 MoonBit 类型。

///| 用 JSON Schema 校验 JSON 数据。返回空串表示合法，否则返回错误信息。
#export_name("validate_json")
pub fn validate_json(schema_json : String, data_json : String) -> String {
  match parse(schema_json) {
    ParseResult::Ok(schema_val, _) => {
      match from_json(schema_val) {
        Some(schema) => {
          match parse(data_json) {
            ParseResult::Ok(data_val, _) => {
              match validate(schema, data_val) {
                None => ""
                Some(e) => e
              }
            }
            ParseResult::Err(e) => "data parse error: " + e
          }
        }
        None => "invalid schema"
      }
    }
    ParseResult::Err(e) => "schema parse error: " + e
  }
}

///| 检查字符串是否匹配正则表达式。
#export_name("regex_check")
pub fn regex_check(pattern : String, text : String) -> Bool {
  regex_match(pattern, text)
}

///| JSON 前缀分类：0=非法、1=合法前缀（不完整）、2=完整。
#export_name("classify_json")
pub fn classify_json(text : String) -> Int {
  classify(text)
}

///| 返回可接在当前前缀之后的合法字符集合。
#export_name("next_chars")
pub fn next_chars(text : String) -> String {
  valid_next_chars(text)
}

///| 判断字符串是否为合法完整 JSON。
#export_name("json_valid")
pub fn json_valid(text : String) -> Bool {
  match parse(text) {
    ParseResult::Ok(_, _) => true
    ParseResult::Err(_) => false
  }
}
