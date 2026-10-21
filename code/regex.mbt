///|
/// 简单正则引擎：递归回溯匹配。
/// 支持字面量、`.`、`*`、`+`、`?`、字符类 `[...]`（含区间与取反）、锚点 `^` `$`。

pub fn regex_match(pattern : String, text : String) -> Bool {
  if pattern.length() > 0 && pattern[0] == '^' {
    match_here(pattern, 1, text, 0)
  } else {
    let mut ti = 0
    while ti <= text.length() {
      if match_here(pattern, 0, text, ti) {
        return true
      }
      ti = ti + 1
    }
    false
  }
}

fn match_here(pat : String, pi : Int, text : String, ti : Int) -> Bool {
  if pi >= pat.length() {
    true
  } else if pat[pi] == '$' {
    ti == text.length()
  } else if pi + 1 < pat.length() && pat[pi + 1] == '*' {
    match_star(pat[pi], pat, pi + 2, text, ti)
  } else if pi + 1 < pat.length() && pat[pi + 1] == '+' {
    match_plus(pat[pi], pat, pi + 2, text, ti)
  } else if pi + 1 < pat.length() && pat[pi + 1] == '?' {
    match_here(pat, pi + 2, text, ti) ||
      (ti < text.length() && single_char(pat[pi], text[ti]) && match_here(pat, pi + 2, text, ti + 1))
  } else if pat[pi] == '[' {
    match_class(pat, pi, text, ti)
  } else if ti < text.length() && single_char(pat[pi], text[ti]) {
    match_here(pat, pi + 1, text, ti + 1)
  } else {
    false
  }
}

fn match_star(c : UInt16, pat : String, pi : Int, text : String, ti : Int) -> Bool {
  let mut k = ti
  while k <= text.length() {
    if match_here(pat, pi, text, k) {
      return true
    }
    if k < text.length() && single_char(c, text[k]) {
      k = k + 1
    } else {
      break
    }
  }
  false
}

fn match_plus(c : UInt16, pat : String, pi : Int, text : String, ti : Int) -> Bool {
  if ti < text.length() && single_char(c, text[ti]) {
    match_star(c, pat, pi, text, ti + 1)
  } else {
    false
  }
}

fn single_char(pc : UInt16, tc : UInt16) -> Bool {
  pc == '.' || pc == tc
}

fn match_class(pat : String, pi : Int, text : String, ti : Int) -> Bool {
  let end = find_class_end(pat, pi)
  if end < 0 {
    false
  } else if end < pat.length() && (pat[end] == '*' || pat[end] == '+' || pat[end] == '?') {
    match_class_quant(pat, pi, end, pat[end], text, ti)
  } else if ti < text.length() && char_in_class(pat, pi, end, text[ti]) {
    match_here(pat, end, text, ti + 1)
  } else {
    false
  }
}

fn match_class_quant(pat : String, pi : Int, end : Int, q : UInt16, text : String, ti : Int) -> Bool {
  if q == '*' {
    let mut k = ti
    while k <= text.length() {
      if match_here(pat, end + 1, text, k) {
        return true
      }
      if k < text.length() && char_in_class(pat, pi, end, text[k]) {
        k = k + 1
      } else {
        break
      }
    }
    false
  } else if q == '+' {
    if ti < text.length() && char_in_class(pat, pi, end, text[ti]) {
      match_class_quant(pat, pi, end, '*', text, ti + 1)
    } else {
      false
    }
  } else {
    match_here(pat, end + 1, text, ti) ||
      (ti < text.length() && char_in_class(pat, pi, end, text[ti]) && match_here(pat, end + 1, text, ti + 1))
  }
}

fn find_class_end(pat : String, pi : Int) -> Int {
  let mut k = pi + 1
  if k < pat.length() && pat[k] == '^' {
    k = k + 1
  }
  if k < pat.length() && pat[k] == ']' {
    k = k + 1
  }
  while k < pat.length() {
    if pat[k] == ']' {
      return k + 1
    }
    k = k + 1
  }
  -1
}

fn char_in_class(pat : String, pi : Int, pe : Int, c : UInt16) -> Bool {
  let mut k = pi + 1
  let mut neg = false
  if k < pe && pat[k] == '^' {
    neg = true
    k = k + 1
  }
  let mut matched = false
  while k < pe - 1 {
    if k + 2 < pe - 1 && pat[k + 1] == '-' {
      if c >= pat[k] && c <= pat[k + 2] {
        matched = true
      }
      k = k + 3
    } else {
      if c == pat[k] {
        matched = true
      }
      k = k + 1
    }
  }
  if neg {
    !matched
  } else {
    matched
  }
}
