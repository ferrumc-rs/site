# FerrumC installer for Windows
# Usage: irm https://ferrumc.com/install.ps1 | iex
#
# Environment variables:
#   FERRUMC_VERSION      Override the version (e.g. v0.1.0)
#   FERRUMC_INSTALL_DIR  Override the directory name (skips prompt)

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$Repo = "ferrumc-rs/ferrumc"
$BinaryName = "ferrumc.exe"
$DefaultDir = "ferrumc-server"

# ANSI escape codes for styling (works in Windows Terminal, VS Code, etc.)
$e = [char]27
$ORANGE = "$e[1;38;2;232;97;10m"
$DIM = "$e[2m"
$BOLD = "$e[1m"
$GREEN = "$e[32;1m"
$YELLOW = "$e[33m"
$CYAN = "$e[36m"
$RED = "$e[31;1m"
$R = "$e[0m"

function Main {
    Banner
    $Target = Detect-Platform
    $Tag = Resolve-Version
    $DirName = Choose-Directory
    $Urls = Build-Urls -Tag $Tag -Target $Target
    $TmpDir = Download-And-Verify -Urls $Urls
    Install-Binary -TmpDir $TmpDir -DirName $DirName
    Print-Success -Tag $Tag -DirName $DirName
}

function Banner {
    # Banner is base64-encoded UTF-8 to survive irm | iex encoding
    $b64 = "ICAgIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl+KWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl+KWiOKWiOKWiOKWiOKWiOKWiOKVlyDilojilojilojilojilojilojilZcg4paI4paI4pWXICAg4paI4paI4pWX4paI4paI4paI4pWXICAg4paI4paI4paI4pWXIOKWiOKWiOKWiOKWiOKWiOKWiOKVlwogICAg4paI4paI4pWU4pWQ4pWQ4pWQ4pWQ4pWd4paI4paI4pWU4pWQ4pWQ4pWQ4pWQ4pWd4paI4paI4pWU4pWQ4pWQ4paI4paI4pWX4paI4paI4pWU4pWQ4pWQ4paI4paI4pWX4paI4paI4pWRICAg4paI4paI4pWR4paI4paI4paI4paI4pWXIOKWiOKWiOKWiOKWiOKVkeKWiOKWiOKVlOKVkOKVkOKVkOKVkOKVnQogICAg4paI4paI4paI4paI4paI4pWXICDilojilojilojilojilojilZcgIOKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVneKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVneKWiOKWiOKVkSAgIOKWiOKWiOKVkeKWiOKWiOKVlOKWiOKWiOKWiOKWiOKVlOKWiOKWiOKVkeKWiOKWiOKVkSAgICAgCiAgICDilojilojilZTilZDilZDilZ0gIOKWiOKWiOKVlOKVkOKVkOKVnSAg4paI4paI4pWU4pWQ4pWQ4paI4paI4pWX4paI4paI4pWU4pWQ4pWQ4paI4paI4pWX4paI4paI4pWRICAg4paI4paI4pWR4paI4paI4pWR4pWa4paI4paI4pWU4pWd4paI4paI4pWR4paI4paI4pWRICAgICAKICAgIOKWiOKWiOKVkSAgICAg4paI4paI4paI4paI4paI4paI4paI4pWX4paI4paI4pWRICDilojilojilZHilojilojilZEgIOKWiOKWiOKVkeKVmuKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVneKWiOKWiOKVkSDilZrilZDilZ0g4paI4paI4pWR4pWa4paI4paI4paI4paI4paI4paI4pWXCiAgICDilZrilZDilZ0gICAgIOKVmuKVkOKVkOKVkOKVkOKVkOKVkOKVneKVmuKVkOKVnSAg4pWa4pWQ4pWd4pWa4pWQ4pWdICDilZrilZDilZ0g4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWdIOKVmuKVkOKVnSAgICAg4pWa4pWQ4pWdIOKVmuKVkOKVkOKVkOKVkOKVkOKVnQ=="
    $banner = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($b64))

    Write-Host ""
    foreach ($line in $banner -split "`n") {
        Write-Host "${ORANGE}${line}${R}"
    }
    Write-Host ""
    Write-Host "${DIM}    A high-performance Minecraft server written in Rust${R}"
    Write-Host "${DIM}    https://github.com/ferrumc-rs/ferrumc${R}"
    Write-Host ""
}

function Detect-Platform {
    if ($env:OS -ne "Windows_NT") {
        Error "This script is for Windows.`n`n  On Linux/macOS, use:`n  curl -fsSL https://ferrumc.com/install.sh | sh"
    }

    $Arch = $env:PROCESSOR_ARCHITECTURE
    if ($Arch -eq "AMD64") {
        Info "Platform    Windows x86_64 (x86_64-pc-windows-msvc)"
        return "x86_64-pc-windows-msvc"
    } else {
        Error "Unsupported architecture: $Arch - Windows only supports x86_64"
    }
}

function Resolve-Version {
    if ($env:FERRUMC_VERSION) {
        $Tag = $env:FERRUMC_VERSION
    } else {
        $Release = Invoke-RestMethod -Uri "https://api.github.com/repos/$Repo/releases/latest" -Headers @{ "User-Agent" = "ferrumc-installer" }
        $Tag = $Release.tag_name

        if (-not $Tag) {
            Error "Failed to fetch latest release from GitHub"
        }
    }

    Info "Version     $Tag"
    return $Tag
}

function Choose-Directory {
    # If env var is set, use it directly
    if ($env:FERRUMC_INSTALL_DIR) {
        $DirName = $env:FERRUMC_INSTALL_DIR
        Info "Directory   $DirName (from `$FERRUMC_INSTALL_DIR)"
        return $DirName
    }

    $DirName = $DefaultDir

    # Check if we're running interactively
    $Interactive = [Environment]::UserInteractive -and (-not $env:CI)

    if ($Interactive) {
        Write-Host ""
        Write-Host -NoNewline "  ${BOLD}Server directory name${R} ${DIM}[${DefaultDir}]${R}: "

        $UserInput = Read-Host
        if ($UserInput) {
            $DirName = $UserInput
        }
    }

    $FullPath = Join-Path (Get-Location).Path $DirName

    if (Test-Path $DirName) {
        Warn "Directory $DirName already exists - installing into it"
    }

    Info "Directory   $FullPath"
    return $DirName
}

function Build-Urls {
    param($Tag, $Target)

    $ArchiveName = "ferrumc-$Tag-$Target.zip"
    $BaseUrl = "https://github.com/$Repo/releases/download/$Tag"

    return @{
        ArchiveName = $ArchiveName
        ArchiveUrl  = "$BaseUrl/$ArchiveName"
        ChecksumUrl = "$BaseUrl/$ArchiveName.sha256"
    }
}

function Download-And-Verify {
    param($Urls)

    $TmpDir = Join-Path ([System.IO.Path]::GetTempPath()) "ferrumc-install-$(Get-Random)"
    New-Item -ItemType Directory -Path $TmpDir -Force | Out-Null

    $ArchivePath = Join-Path $TmpDir $Urls.ArchiveName
    $ChecksumPath = Join-Path $TmpDir "$($Urls.ArchiveName).sha256"

    Write-Host ""
    Step "Downloading $($Urls.ArchiveName)..."
    Invoke-WebRequest -Uri $Urls.ArchiveUrl -OutFile $ArchivePath -UseBasicParsing

    Step "Downloading checksum..."
    Invoke-WebRequest -Uri $Urls.ChecksumUrl -OutFile $ChecksumPath -UseBasicParsing

    Step "Verifying SHA-256 checksum..."
    $ExpectedLine = (Get-Content $ChecksumPath -Raw).Trim()
    $ExpectedHash = ($ExpectedLine -split '\s+')[0].ToUpper()
    $ActualHash = (Get-FileHash -Path $ArchivePath -Algorithm SHA256).Hash.ToUpper()

    if ($ActualHash -ne $ExpectedHash) {
        Remove-Item -Recurse -Force $TmpDir
        Error "Checksum mismatch!`n    Expected: $ExpectedHash`n    Actual:   $ActualHash"
    }
    Write-Host "  ${GREEN}OK${R} Checksum verified"

    Step "Extracting binary..."
    Expand-Archive -Path $ArchivePath -DestinationPath $TmpDir -Force

    $BinaryPath = Join-Path $TmpDir $BinaryName
    if (-not (Test-Path $BinaryPath)) {
        Remove-Item -Recurse -Force $TmpDir
        Error "Expected binary '$BinaryName' not found in archive"
    }

    return $TmpDir
}

function Install-Binary {
    param($TmpDir, $DirName)

    if (-not (Test-Path $DirName)) {
        New-Item -ItemType Directory -Path $DirName -Force | Out-Null
    }

    $Source = Join-Path $TmpDir $BinaryName
    $Destination = Join-Path $DirName $BinaryName
    Move-Item -Path $Source -Destination $Destination -Force

    # Clean up temp dir
    Remove-Item -Recurse -Force $TmpDir
}

function Print-Success {
    param($Tag, $DirName)

    $FullPath = Join-Path (Get-Location).Path $DirName

    Write-Host ""
    Write-Host "  ${GREEN}OK FerrumC $Tag installed successfully!${R}"
    Write-Host ""
    Write-Host "  ${DIM}-----------------------------------------${R}"
    Write-Host ""
    Write-Host "  ${BOLD}To start your server:${R}"
    Write-Host ""
    Write-Host "    ${CYAN}cd $DirName${R}"
    Write-Host "    ${CYAN}.\ferrumc.exe${R}"
    Write-Host ""
    Write-Host "  ${DIM}Docs:    https://docs.ferrumc.com${R}"
    Write-Host "  ${DIM}Discord: https://discord.gg/qT5J8EMjwk${R}"
    Write-Host ""
}

# ── Helpers ──────────────────────────────────────────────────────────────────

function Info {
    param([string]$Message)
    Write-Host "  ${CYAN}*${R} $Message"
}

function Step {
    param([string]$Message)
    Write-Host "  ${ORANGE}->${R} $Message"
}

function Warn {
    param([string]$Message)
    Write-Host "  ${YELLOW}!${R} $Message"
}

function Error {
    param([string]$Message)
    Write-Host ""
    Write-Host "  ${RED}error:${R} $Message"
    Write-Host ""
    exit 1
}

Main
