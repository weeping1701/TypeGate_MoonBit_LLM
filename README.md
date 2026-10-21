# TypeGate

> MoonBit 类型驱动的 LLM 结构化输出引擎 —— 让大模型的输出 **100% 合法、可解析**。

TypeGate 是一个用 [MoonBit](https://www.moonbitlang.com/) 编写的结构化输出引擎。开发者用 JSON Schema 定义期望的输出结构，引擎提供：

1. **JSON Schema 校验** —— 严格校验 LLM 输出的 JSON 是否符合 Schema，并给出精确的错误定位；
2. **正则引擎** —— 手写的 NFA 正则匹配器（支持 `.` `*` `+` `?` `[a-z]` `^` `$`），用于字符串 `pattern` 约束；
3. **受约束解码** —— 判断一段"部分输出"是非法 / 合法前缀 / 完整 JSON，并给出下一个合法字符集合，可作为 LLM 解码时的 token 掩码基础。

核心引擎全部用 MoonBit 实现，可编译到 WASM-GC / JavaScript / 原生，前端直接调用 MoonBit 编译产物，实现前后端联动。

## 特性

- 纯 MoonBit 实现，零运行时依赖；
- 手写 JSON 解析器 / 序列化器（支持完整 JSON 语法、字符串转义、`\uXXXX`）；
- 手写正则引擎（字面量、通配符、量词、字符类、锚点）；
- JSON Schema 子集校验：`type` / `properties` / `required` / `items` / `enum` / `pattern`；
- 受约束解码：JSON 前缀三态分类 + 下一个合法字符集合；
- 编译到 WASM-GC / JS，可直接运行在浏览器；
- 附带精美 Web 演示界面与命令行自检程序；
- 12 个单元测试全部通过。

## 目录结构

```
typegate/
├── moon.mod              # 模块元信息
├── moon.pkg              # 包声明（foreign_library，可链接导出）
├── typegate.mbt          # JSON 值模型 + 解析器 + 序列化器
├── schema.mbt            # JSON Schema 类型 + 校验器
├── regex.mbt             # 正则引擎
├── decoder.mbt           # 受约束解码（前缀分类 + 下一个合法字符）
├── api.mbt               # 面向 JS/WASM 的高层导出 API
├── typegate_test.mbt     # 单元测试
├── cmd/main/             # 命令行自检程序
└── web/                  # 前端演示界面
    ├── index.html
    ├── style.css
    ├── app.js
    ├── typegate.js         # 编译产物（ES Module）
    └── typegate.browser.js # 浏览器版（window.typegate 全局）
```

## 构建

```bash
# 检查
moon check

# 运行测试
moon test

# 一键构建前端（编译 JS + 生成浏览器版）
powershell -ExecutionPolicy Bypass -File build-web.ps1

# 或手动：编译为 JavaScript
moon build --target js
cp _build/js/debug/build/typegate.js web/typegate.js

# 编译为 WASM-GC
moon build --target wasm-gc

# 运行命令行自检
moon run cmd/main
```

## 使用

### 1. 命令行

```bash
moon run cmd/main
```

输出引擎对 JSON Schema 校验、正则匹配、受约束解码的自检结果。

### 2. Web 前端

直接用浏览器打开 `web/index.html` 即可（无需服务器，双击可用）：

前端包含三个面板：

- **JSON Schema 校验器** —— 输入 Schema 与数据，实时校验；
- **正则引擎** —— 输入正则与文本，测试匹配；
- **受约束解码** —— 边输入边显示"非法 / 前缀 / 完整"状态与下一个合法字符。

### 3. 作为库调用（MoonBit）

```moonbit
let schema = Schema::SObject([("name", Schema::SString)], ["name"])
match parse("{\"name\":\"bob\"}") {
  Ok(v, _) => validate(schema, v)  // None 表示通过
  Err(e) => ...
}
```

## 导出 API

| 函数 | 签名 | 说明 |
|---|---|---|
| `validate_json` | `(String, String) -> String` | 用 Schema 校验数据，返回空串表示合法 |
| `regex_check` | `(String, String) -> Bool` | 正则匹配 |
| `classify_json` | `(String) -> Int` | 前缀分类：0 非法 / 1 前缀 / 2 完整 |
| `next_chars` | `(String) -> String` | 下一个合法字符集合 |
| `json_valid` | `(String) -> Bool` | 是否为合法完整 JSON |

## 技术要点

- **JSON 解析器**：递归下降，逐字符解析，支持对象 / 数组 / 字符串转义 / Unicode；
- **正则引擎**：递归回溯 + 字符类区间匹配 + 量词处理；
- **受约束解码**：三态递归分类器，复用 JSON 语法，逐字符判断"可延拓性"；
- **MoonBit 类型系统**：枚举 + 模式匹配表达解析器与校验器，类型安全。

## 测试

```bash
moon test
# Total tests: 12, passed: 12, failed: 0
```

覆盖 JSON 解析往返、非法输入拒绝、转义处理、正则各类语法、Schema 校验、前缀分类与下一个字符集合。

## License

Apache-2.0
