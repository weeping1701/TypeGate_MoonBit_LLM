# TypeGate 前端构建脚本
# 用法：在项目根目录执行  powershell -ExecutionPolicy Bypass -File build-web.ps1
# 作用：moon build 编译 JS 后端 -> 复制 typegate.js -> 生成浏览器可直接引用的 typegate.browser.js

$ErrorActionPreference = "Stop"

$moon = (Get-Command moon -ErrorAction SilentlyContinue)
if ($moon) { $moonBin = "moon" } else { $moonBin = "C:\Users\锦绣\.moon\bin\moon.exe" }

Write-Host "[1/3] 编译 JS 后端..."
& $moonBin build --target js
if ($LASTEXITCODE -ne 0) { throw "moon build 失败" }

$src = Join-Path (Get-Location) "_build\js\debug\build\typegate.js"
$web = Join-Path (Get-Location) "web"
if (-not (Test-Path $src)) { throw "未找到编译产物 $src" }

Write-Host "[2/3] 复制 typegate.js..."
Copy-Item $src (Join-Path $web "typegate.js") -Force

Write-Host "[3/3] 生成 typegate.browser.js..."
$c = [System.IO.File]::ReadAllText((Join-Path $web "typegate.js"))
$m = [regex]::Match($c, 'export\s*\{[^}]*\}')
if (-not $m.Success) { throw "未找到 export 语句" }
$pairs = [regex]::Matches($m.Value, '([A-Za-z0-9_$]+)\s+as\s+([A-Za-z0-9_$]+)')
$map = @()
foreach ($p in $pairs) { $map += ($p.Groups[2].Value + ": " + $p.Groups[1].Value) }
$window = "window.typegate = { " + ($map -join ", ") + " };"
$new = $c.Replace($m.Value, $window)
$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText((Join-Path $web "typegate.browser.js"), $new, $utf8)

Write-Host "完成。直接用浏览器打开 web/index.html 即可。"
