///|
/// 简化 JSON Schema 与校验器。
/// 支持：类型约束、对象属性 + required、数组 items、enum 枚举、字符串 pattern（正则）。

pub(all) enum Schema {
  Any
  SNull
  SBool
  SNumber
  SString
  SArray(Schema)
  SObject(Array[(String, Schema)], Array[String])
  SEnum(Array[JsonValue])
  SPattern(String)
}

///| 校验 value 是否符合 schema。返回 None 表示通过，Some(msg) 表示失败原因。
pub fn validate(schema : Schema, value : JsonValue) -> String? {
  match (schema, value) {
    (Any, _) => None
    (SNull, JsonValue::Null) => None
    (SBool, JsonValue::Bool(_)) => None
    (SNumber, JsonValue::Number(_)) => None
    (SString, JsonValue::Str(_)) => None
    (SArray(item), JsonValue::Arr(items)) => validate_array(item, items)
    (SObject(props, req), JsonValue::Obj(fields)) => validate_object(props, req, fields)
    (SEnum(vals), v) => validate_enum(vals, v)
    (SPattern(re), JsonValue::Str(s)) => if regex_match(re, s) { None } else { Some("string does not match pattern") }
    _ => Some("type mismatch")
  }
}

fn validate_array(item : Schema, items : Array[JsonValue]) -> String? {
  let mut i = 0
  while i < items.length() {
    match validate(item, items[i]) {
      None => i = i + 1
      Some(e) => return Some("array item " + i.to_string() + ": " + e)
    }
  }
  None
}

fn validate_object(
  props : Array[(String, Schema)],
  req : Array[String],
  fields : Array[(String, JsonValue)]
) -> String? {
  // 检查 required 字段是否存在
  let mut r = 0
  while r < req.length() {
    if !has_field(fields, req[r]) {
      return Some("missing required field: " + req[r])
    }
    r = r + 1
  }
  // 检查每个字段的值是否符合对应 schema
  let mut f = 0
  while f < fields.length() {
    let (key, val) = fields[f]
    match find_prop(props, key) {
      None => f = f + 1
      Some(schema) => {
        match validate(schema, val) {
          None => f = f + 1
          Some(e) => return Some("field '" + key + "': " + e)
        }
      }
    }
  }
  None
}

fn validate_enum(vals : Array[JsonValue], v : JsonValue) -> String? {
  let mut i = 0
  while i < vals.length() {
    if equals(vals[i], v) {
      return None
    }
    i = i + 1
  }
  Some("value not in enum")
}

fn has_field(fields : Array[(String, JsonValue)], key : String) -> Bool {
  let mut i = 0
  while i < fields.length() {
    let (k, _) = fields[i]
    if k == key {
      return true
    }
    i = i + 1
  }
  false
}

fn find_prop(props : Array[(String, Schema)], key : String) -> Schema? {
  let mut i = 0
  while i < props.length() {
    let (k, s) = props[i]
    if k == key {
      return Some(s)
    }
    i = i + 1
  }
  None
}

///| 从 JSON Schema 风格的 JsonValue 构造 Schema（便于前端直接传 schema JSON）。
pub fn from_json(schema : JsonValue) -> Schema? {
  match schema {
    JsonValue::Obj(fields) => {
      let typ = match get_str(fields, "type") {
        Some(t) => t
        None => return None
      }
      if typ == "object" {
        let props = parse_props(fields)
        let req = parse_required(fields)
        Some(SObject(props, req))
      } else if typ == "array" {
        match get_field(fields, "items") {
          Some(item_schema) => {
            match from_json(item_schema) {
              Some(item) => Some(SArray(item))
              None => None
            }
          }
          None => Some(SArray(Any))
        }
      } else if typ == "string" {
        match get_str(fields, "pattern") {
          Some(re) => Some(SPattern(re))
          None => Some(SString)
        }
      } else if typ == "number" {
        Some(SNumber)
      } else if typ == "boolean" {
        Some(SBool)
      } else if typ == "null" {
        Some(SNull)
      } else {
        Some(Any)
      }
    }
    _ => Some(Any)
  }
}

fn parse_props(fields : Array[(String, JsonValue)]) -> Array[(String, Schema)] {
  let result : Array[(String, Schema)] = []
  match get_field(fields, "properties") {
    None => result
    Some(JsonValue::Obj(props)) => {
      let mut i = 0
      while i < props.length() {
        let (key, val) = props[i]
        match from_json(val) {
          None => i = i + 1
          Some(s) => {
            result.push((key, s))
            i = i + 1
          }
        }
      }
      result
    }
    Some(_) => result
  }
}

fn parse_required(fields : Array[(String, JsonValue)]) -> Array[String] {
  let result : Array[String] = []
  match get_field(fields, "required") {
    None => result
    Some(JsonValue::Arr(items)) => {
      let mut i = 0
      while i < items.length() {
        match items[i] {
          JsonValue::Str(s) => result.push(s)
          _ => ()
        }
        i = i + 1
      }
      result
    }
    Some(_) => result
  }
}

fn get_str(fields : Array[(String, JsonValue)], key : String) -> String? {
  match get_field(fields, key) {
    None => None
    Some(JsonValue::Str(s)) => Some(s)
    Some(_) => None
  }
}

fn get_field(fields : Array[(String, JsonValue)], key : String) -> JsonValue? {
  let mut i = 0
  while i < fields.length() {
    let (k, v) = fields[i]
    if k == key {
      return Some(v)
    }
    i = i + 1
  }
  None
}
