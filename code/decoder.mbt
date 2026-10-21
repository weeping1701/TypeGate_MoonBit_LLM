///|
/// 受约束解码：JSON 前缀分类与"下一个合法字符"集合。
/// classify 返回 0=非法、1=合法前缀（不完整）、2=完整合法。
/// 这是 TypeGate 面向 LLM 受约束解码（token mask）的核心。

pub fn classify(s : String) -> Int {
  let i = skip_ws(s, 0)
  let (st, _) = classify_value(s, i)
  st
}

///| 返回可接在当前前缀之后、且仍保持合法前缀的字符集合。
pub fn valid_next_chars(s : String) -> String {
  let candidates = "{}[]\",:0123456789-+.eEtruefalsn \t\n\r"
  let mut result = ""
  let mut i = 0
  while i < candidates.length() {
    let c = candidates[i]
    if classify(s + ch_str(c)) != 0 {
      result = result + ch_str(c)
    }
    i = i + 1
  }
  result
}

fn classify_value(s : String, i : Int) -> (Int, Int) {
  if i >= s.length() {
    (1, i)
  } else {
    let c = s[i]
    if c == '{' {
      classify_object(s, i)
    } else if c == '[' {
      classify_array(s, i)
    } else if c == '"' {
      classify_string(s, i)
    } else if c == 't' || c == 'f' || c == 'n' {
      classify_literal(s, i)
    } else if c == '-' || is_digit(c) {
      classify_number(s, i)
    } else {
      (0, i)
    }
  }
}

fn classify_object(s : String, i : Int) -> (Int, Int) {
  let mut k = i + 1
  while true {
    k = skip_ws(s, k)
    if k >= s.length() {
      return (1, k)
    }
    if s[k] == '}' {
      return (2, k + 1)
    }
    let (kst, kend) = classify_string(s, k)
    if kst != 2 {
      return (kst, kend)
    }
    k = skip_ws(s, kend)
    if k >= s.length() {
      return (1, k)
    }
    if s[k] != ':' {
      return (0, k)
    }
    k = skip_ws(s, k + 1)
    let (vst, vend) = classify_value(s, k)
    if vst != 2 {
      return (vst, vend)
    }
    k = skip_ws(s, vend)
    if k < s.length() && s[k] == ',' {
      k = k + 1
    }
  }
  (1, i)
}

fn classify_array(s : String, i : Int) -> (Int, Int) {
  let mut k = i + 1
  while true {
    k = skip_ws(s, k)
    if k >= s.length() {
      return (1, k)
    }
    if s[k] == ']' {
      return (2, k + 1)
    }
    let (vst, vend) = classify_value(s, k)
    if vst != 2 {
      return (vst, vend)
    }
    k = skip_ws(s, vend)
    if k < s.length() && s[k] == ',' {
      k = k + 1
    }
  }
  (1, i)
}

fn classify_string(s : String, i : Int) -> (Int, Int) {
  let mut k = i + 1
  while true {
    if k >= s.length() {
      return (1, k)
    }
    let c = s[k]
    if c == '"' {
      return (2, k + 1)
    } else if c == '\\' {
      if k + 1 >= s.length() {
        return (1, k + 1)
      }
      k = k + 2
    } else {
      k = k + 1
    }
  }
  (1, i)
}

fn classify_literal(s : String, i : Int) -> (Int, Int) {
  // 检查是否为 true/false/null 的前缀或完整字面量
  let n = s.length()
  let mut k = i
  while k < n && k < i + 5 {
    let c = s[k]
    if c == 't' || c == 'r' || c == 'u' || c == 'e' || c == 'f' || c == 'a' || c == 'l' || c == 's' || c == 'n' {
      k = k + 1
    } else {
      break
    }
  }
  let word = sub(s, i, k)
  if is_literal_prefix(word) {
    if word == "true" || word == "false" || word == "null" {
      (2, k)
    } else {
      (1, k)
    }
  } else {
    (0, i)
  }
}

fn classify_number(s : String, i : Int) -> (Int, Int) {
  let mut k = i
  while k < s.length() {
    let c = s[k]
    if is_digit(c) || c == '-' || c == '+' || c == '.' || c == 'e' || c == 'E' {
      k = k + 1
    } else {
      break
    }
  }
  (2, k)
}

fn is_literal_prefix(w : String) -> Bool {
  "true".has_prefix(w) || "false".has_prefix(w) || "null".has_prefix(w)
}

fn sub(s : String, i : Int, j : Int) -> String {
  let mut buf = ""
  let mut k = i
  while k < j {
    buf = buf + ch_str(s[k])
    k = k + 1
  }
  buf
}
