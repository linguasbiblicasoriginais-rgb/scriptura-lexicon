<#
Scriptura Lexicon - reparo da copia local dos leitores de Filon.
USO: powershell -NoProfile -ExecutionPolicy Bypass -File .\scripts\reparar-leitores-filon-local.ps1 -PastaSite "C:\caminho\scriptura-lexicon"
Nao altera nenhuma branch Git, nem executa reset, checkout, commit, merge ou push.
#>
param([string]$PastaSite=(Get-Location).Path)
Set-StrictMode -Version Latest
$ErrorActionPreference="Stop"
$repo="linguasbiblicasoriginais-rgb/scriptura-lexicon"
$checks=@{
 "filon/data/tlg0018.tlg017.1st1K-grc1.xml"="a3b737626450a6adda6d53cefbfe3eb7368d9e22"
 "filon/data/tlg0018.tlg007.1st1K-grc1.xml"="758adb38d6a874f76c7c2951d3b43610ac2e1f38"
}
$files=@(
 "index.html",
 "scriptures/greek-authors.js",
 "scriptures/sections.js",
 "filon/fuga-reader.js",
 "filon/gigantibus-reader.js",
 "filon/data/tlg0018.tlg017.1st1K-grc1.xml",
 "filon/data/tlg0018.tlg007.1st1K-grc1.xml"
)
function Get-GitBlobSha([string]$path) {
 [byte[]]$data=[IO.File]::ReadAllBytes($path)
 [byte[]]$header=[Text.Encoding]::ASCII.GetBytes("blob $($data.Length)" + [char]0)
 [byte[]]$all=New-Object byte[] ($header.Length+$data.Length)
 [Array]::Copy($header,0,$all,0,$header.Length)
 [Array]::Copy($data,0,$all,$header.Length,$data.Length)
 $hash=[Security.Cryptography.SHA1]::Create()
 try { return ([BitConverter]::ToString($hash.ComputeHash($all))).Replace("-","").ToLowerInvariant() }
 finally { $hash.Dispose() }
}
$root=(Resolve-Path -LiteralPath $PastaSite).Path
if (-not (Test-Path -LiteralPath (Join-Path $root "index.html") -PathType Leaf) -or
    -not (Test-Path -LiteralPath (Join-Path $root "scriptures/greek-authors.js") -PathType Leaf)) {
 throw "Esta pasta nao contem a raiz do Scriptura Lexicon: $root"
}
if (Get-Command git -ErrorAction SilentlyContinue) {
 $branch=(& git -C $root branch --show-current 2>$null)
 if ($LASTEXITCODE -eq 0 -and $branch -and $branch.Trim() -ne "chat-gpt-commits") {
  throw "Branch local '$branch' nao permitida. Este reparo exige chat-gpt-commits. Nenhum arquivo foi alterado."
 }
}
$ref=Invoke-RestMethod -Uri "https://api.github.com/repos/$repo/git/ref/heads/chat-gpt-commits" -Headers @{"Accept"="application/vnd.github+json";"User-Agent"="Scriptura-Filon-Repair"}
$sha=[string]$ref.object.sha
if ($sha -notmatch '^[0-9a-f]{40}$') { throw "HEAD remoto nao verificavel." }
$temp=Join-Path ([IO.Path]::GetTempPath()) ("scriptura-filon-"+[guid]::NewGuid().ToString("N"))
$backup=Join-Path ([IO.Path]::GetDirectoryName($root)) ("scriptura-filon-backup-"+(Get-Date -Format "yyyyMMdd-HHmmss"))
[void](New-Item -ItemType Directory -Path $temp -Force)
try {
 foreach($file in $files) {
  $to=Join-Path $temp $file
  [void](New-Item -ItemType Directory -Path (Split-Path $to -Parent) -Force)
  $url="https://raw.githubusercontent.com/$repo/$sha/$file"
  Invoke-WebRequest -Uri $url -OutFile $to -UseBasicParsing
  if ((Get-Item -LiteralPath $to).Length -eq 0) { throw "Arquivo vazio: $file" }
 }
 foreach($file in $checks.Keys) {
  $actual=Get-GitBlobSha (Join-Path $temp $file)
  if ($actual -ne $checks[$file]) { throw "SHA do texto nao coincide com a fonte: $file ($actual)" }
 }
 $cat=Get-Content -LiteralPath (Join-Path $temp "scriptures/greek-authors.js") -Raw -Encoding UTF8
 $sections=Get-Content -LiteralPath (Join-Path $temp "scriptures/sections.js") -Raw -Encoding UTF8
 $index=Get-Content -LiteralPath (Join-Path $temp "index.html") -Raw -Encoding UTF8
 if (-not ($cat.Contains("ScripturaPhiloFuga") -and $cat.Contains("ScripturaPhiloGigantibus") -and
           $sections.Contains("ScripturaPhiloFuga") -and $sections.Contains("ScripturaPhiloGigantibus") -and
           $index.Contains('src="filon/fuga-reader.js"') -and
           $index.Contains('src="filon/gigantibus-reader.js"'))) {
  throw "Catalogo e leitores inconsistentes. Nada foi substituido."
 }
 $changed=@()
 foreach($file in $files) {
  $old=Join-Path $root $file
  $new=Join-Path $temp $file
  if (-not (Test-Path -LiteralPath $old -PathType Leaf)) { $changed+= $file; continue }
  if ((Get-FileHash -LiteralPath $old -Algorithm SHA256).Hash -ne (Get-FileHash -LiteralPath $new -Algorithm SHA256).Hash) {
   $changed+= $file
  }
 }
 if ($changed.Count -eq 0) {
  Write-Host "Os sete arquivos ja correspondem a chat-gpt-commits ($sha). Confira a pasta servida pelo localhost e o cache."
 } else {
  [void](New-Item -ItemType Directory -Path $backup -Force)
  foreach($file in $changed) {
   $from=Join-Path $root $file
   if (Test-Path -LiteralPath $from -PathType Leaf) {
    $saved=Join-Path $backup $file
    [void](New-Item -ItemType Directory -Path (Split-Path $saved -Parent) -Force)
    Copy-Item -LiteralPath $from -Destination $saved -Force
   }
  }
  foreach($file in $changed) {
   $to=Join-Path $root $file
   [void](New-Item -ItemType Directory -Path (Split-Path $to -Parent) -Force)
   Copy-Item -LiteralPath (Join-Path $temp $file) -Destination $to -Force
  }
  foreach($file in $checks.Keys) {
   if ((Get-GitBlobSha (Join-Path $root $file)) -ne $checks[$file]) {
    throw "Verificacao local falhou; backup disponivel em $backup"
   }
  }
  Write-Host "Atualizados $($changed.Count) arquivos na pasta: $root"
  Write-Host "Origem: chat-gpt-commits / $sha"
  Write-Host "Backup: $backup"
 }
 Write-Host "Reinicie o servidor local, se necessario, e use Ctrl+Shift+R no navegador."
} finally {
 if (Test-Path -LiteralPath $temp) { Remove-Item -LiteralPath $temp -Recurse -Force }
}
