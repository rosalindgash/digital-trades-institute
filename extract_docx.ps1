$zipPath = 'C:\Users\rrgas\Documents\DTI\LEVEL_3.docx'
$extractPath = 'C:\Users\rrgas\Documents\DTI\LEVEL_3_temp'

# Create temp directory
if (Test-Path $extractPath) { Remove-Item $extractPath -Recurse -Force }
New-Item -ItemType Directory -Path $extractPath | Out-Null

# Extract DOCX as ZIP
Expand-Archive -Path $zipPath -DestinationPath $extractPath -Force

# Read the document.xml file
[xml]$xml = Get-Content "$extractPath\word\document.xml" -Raw

# Extract all text
$xml.SelectNodes('//w:t', @{'w'='http://schemas.openxmlformats.org/wordprocessingml/2006/main'}) | ForEach-Object {
    Write-Host $_.InnerText -NoNewline
}

Write-Host ""

# Cleanup
Remove-Item $extractPath -Recurse -Force
