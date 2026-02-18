# Install Scripts

Platform-specific installer scripts that download the FerrumC server binary from GitHub Releases. Served as static files from `/public`.

## Usage

**Linux / macOS:**
```bash
curl -fsSL https://ferrumc.com/install.sh | sh
```

**Windows (PowerShell):**
```powershell
irm https://ferrumc.com/install.ps1 | iex
```

## What the scripts do

1. Show a FerrumC ASCII banner
2. Detect OS and architecture, map to a release target triple
3. Fetch the latest release tag from the GitHub API
4. Prompt for a server directory name (default: `ferrumc-server`)
5. Download the archive + `.sha256` sidecar from GitHub Releases
6. Verify the SHA-256 checksum
7. Extract the `ferrumc` binary into the chosen directory
8. Print "get started" instructions (`cd <dir> && ./ferrumc`)

## Supported targets

| OS | Arch | Target Triple | Archive Format |
|----|------|---------------|----------------|
| Linux | x86_64 | `x86_64-unknown-linux-musl` | `.tar.gz` |
| Linux | aarch64 | `aarch64-unknown-linux-musl` | `.tar.gz` |
| macOS | arm64 | `aarch64-apple-darwin` | `.tar.gz` |
| Windows | x86_64 | `x86_64-pc-windows-msvc` | `.zip` |

No other OS/arch combinations are supported. The scripts error out for anything not in this table.

## GitHub Release URL pattern

```
https://github.com/ferrumc-rs/ferrumc/releases/download/{tag}/ferrumc-{tag}-{target}.{ext}
```

Checksum sidecar:
```
https://github.com/ferrumc-rs/ferrumc/releases/download/{tag}/ferrumc-{tag}-{target}.{ext}.sha256
```

The `.sha256` file uses standard `sha256sum` format: `{hash}  {filename}`

## Environment variable overrides

### install.sh (Linux / macOS)

| Variable | Description |
|----------|-------------|
| `VERSION` | Pin a specific release tag (e.g. `v0.1.0`) instead of fetching latest |
| `INSTALL_DIR` | Set directory name directly, skips the interactive prompt |

### install.ps1 (Windows)

| Variable | Description |
|----------|-------------|
| `FERRUMC_VERSION` | Pin a specific release tag (e.g. `v0.1.0`) instead of fetching latest |
| `FERRUMC_INSTALL_DIR` | Set directory name directly, skips the interactive prompt |

## Platform-specific gotchas

### install.sh — Line endings

The shell script **must** have LF line endings. If it has CRLF (written on Windows), Linux/macOS `sh` will choke with `set: Illegal option -` because it sees `set -eu\r`.

`.gitattributes` enforces this:
```
*.sh text eol=lf
```

If the file ends up with CRLF on disk anyway (e.g. after a Write tool on Windows), fix it with:
```bash
node -e "const fs=require('fs');const p='public/install.sh';fs.writeFileSync(p,fs.readFileSync(p,'utf8').replace(/\r\n/g,'\n'))"
```

### install.ps1 — PowerShell 5.1 compatibility

Windows ships with PowerShell 5.1, not PowerShell 7. The script **must not** use:

- `?.` (null-conditional member access) — PS 7+ only
- `??` (null-coalescing operator) — PS 7+ only
- `[System.Runtime.InteropServices.RuntimeInformation]` — .NET Core only, not in .NET Framework

Use instead:
- Traditional `if ($x) { $x.Property }` null checks
- `$env:PROCESSOR_ARCHITECTURE` for arch detection (returns `AMD64` on x86_64)

### install.ps1 — Unicode banner encoding

`irm | iex` downloads the script as text and the encoding conversion destroys any raw Unicode characters in the source. The FerrumC block-art banner is stored as a **base64-encoded UTF-8 string** and decoded at runtime:

```powershell
$b64 = "ICAgIOKWiOKWiOKWi..."
$banner = [System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($b64))
```

To regenerate the base64 if the banner changes:
```bash
node -e "
const banner = '...new banner text...';
console.log(Buffer.from(banner, 'utf8').toString('base64'));
"
```

### install.ps1 — Colors

`-ForegroundColor DarkYellow` renders as a flat yellow, not orange. The script uses **ANSI escape codes** for true-color output in Windows Terminal:

```powershell
$e = [char]27
$ORANGE = "$e[1;38;2;232;97;10m"   # Bold + RGB(232, 97, 10) — ferrum brand orange
$R = "$e[0m"                        # Reset
Write-Host "${ORANGE}text${R}"
```

This works in Windows Terminal, VS Code integrated terminal, and any terminal that supports ANSI sequences.

## Website component

`src/components/ui/terminal-command.tsx` displays the install command on the site. It:

- Auto-detects the visitor's OS via `navigator.userAgent`
- Shows `curl | sh` for Linux/macOS, `irm | iex` for Windows
- Platform label under the command toggles to the other platform on click
- Provides a direct `.zip` download link to GitHub Releases as an alternative
- Copy-to-clipboard button on the command itself
