# TypeGate 提交历史生成脚本
# 用法：先安装 Git 并配置身份，然后在项目根目录执行本脚本：
#   git config --global user.name  "你的名字"
#   git config --global user.email "你的邮箱"
#   powershell -ExecutionPolicy Bypass -File commit-plan.ps1
#
# 本脚本按逻辑开发顺序创建 11 次提交，保留完整 commits 记录。

$ErrorActionPreference = "Stop"

# 1. 检查 git
$git = (Get-Command git -ErrorAction SilentlyContinue)
if (-not $git) {
  Write-Error "未检测到 git，请先安装 Git 并加入 PATH。"
}

# 2. 初始化仓库（若尚未初始化）
if (-not (Test-Path ".git")) {
  git init
}

# 3. 确认身份已配置
$name = git config user.name
if (-not $name) {
  Write-Warning "未配置 git user.name，请先执行： git config --global user.name \"你的名字\""
  exit 1
}

# 4. 依次创建提交
function Add-Commit($files, $msg) {
  git add -- $files
  git commit -m $msg | Out-Null
  Write-Host "已提交: $msg"
}

Add-Commit @("moon.mod","moon.pkg",".gitignore","LICENSE") "chore: 初始化 MoonBit 项目结构与许可证"
Add-Commit @("typegate.mbt") "feat: 实现 JSON 值模型、递归下降解析器与序列化器"
Add-Commit @("regex.mbt") "feat: 实现正则引擎（字面量/通配符/量词/字符类/锚点）"
Add-Commit @("schema.mbt") "feat: 实现 JSON Schema 校验器（type/properties/required/pattern）"
Add-Commit @("decoder.mbt") "feat: 实现受约束解码（JSON 前缀分类 + 下一个合法字符）"
Add-Commit @("api.mbt") "feat: 增加面向 JS/WASM 的高层导出 API"
Add-Commit @("cmd/main/main.mbt","cmd/main/moon.pkg") "feat: 增加命令行自检程序"
Add-Commit @("web/index.html","web/style.css","web/app.js","build-web.ps1") "feat: 增加 Web 前端演示界面与构建脚本"
Add-Commit @("web/typegate.js","web/typegate.browser.js") "build: 添加 MoonBit 编译产物（JS 后端）"
Add-Commit @("typegate_test.mbt") "test: 增加 12 个单元测试（解析/正则/校验/解码）"
Add-Commit @("README.md") "docs: 编写 README 使用说明"

Write-Host ""
Write-Host "完成！共创建 11 次提交："
git log --oneline
