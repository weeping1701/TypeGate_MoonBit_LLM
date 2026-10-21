const tg = window.typegate;

// ---------- 面板 1：JSON Schema 校验 ----------
const schemaEl = document.getElementById("schema");
const dataEl = document.getElementById("data");
const validateBtn = document.getElementById("validateBtn");
const validateResult = document.getElementById("validateResult");

function renderValidate() {
  const err = tg.validate_json(schemaEl.value, dataEl.value);
  if (err === "") {
    validateResult.className = "result ok";
    validateResult.textContent = "✓ 合法：数据完全符合 Schema";
  } else {
    validateResult.className = "result err";
    validateResult.textContent = "✗ 不合法：" + err;
  }
}
validateBtn.addEventListener("click", renderValidate);
renderValidate();

// ---------- 面板 2：正则引擎 ----------
const patternEl = document.getElementById("pattern");
const textEl = document.getElementById("text");
const regexBtn = document.getElementById("regexBtn");
const regexResult = document.getElementById("regexResult");

function renderRegex() {
  const ok = tg.regex_check(patternEl.value, textEl.value);
  regexResult.className = ok ? "result ok" : "result err";
  regexResult.textContent = ok
    ? "✓ 匹配成功"
    : "✗ 不匹配";
}
regexBtn.addEventListener("click", renderRegex);
renderRegex();

// ---------- 面板 3：受约束解码 ----------
const partialEl = document.getElementById("partial");
const stateBadge = document.getElementById("stateBadge");
const nextChars = document.getElementById("nextChars");

function renderPartial() {
  const s = partialEl.value;
  const st = tg.classify_json(s);
  if (st === 2) {
    stateBadge.className = "state complete";
    stateBadge.textContent = "完整合法 JSON";
  } else if (st === 1) {
    stateBadge.className = "state incomplete";
    stateBadge.textContent = "合法前缀（可继续）";
  } else {
    stateBadge.className = "state invalid";
    stateBadge.textContent = "非法（无法成为合法 JSON）";
  }
  nextChars.textContent = tg.next_chars(s) || "（无）";
}
partialEl.addEventListener("input", renderPartial);
renderPartial();
