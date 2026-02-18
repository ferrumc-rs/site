#!/bin/sh
set -eu

# FerrumC installer for Linux and macOS
# Usage: curl -fsSL https://ferrumc.com/install.sh | sh
#
# Environment variables:
#   VERSION       Override the version to install (e.g. v0.1.0)
#   INSTALL_DIR   Override the directory name (skips prompt)

REPO="ferrumc-rs/ferrumc"
BINARY_NAME="ferrumc"
DEFAULT_DIR="ferrumc-server"

# ── Colors ──────────────────────────────────────────────────────────────────
if [ -t 1 ] 2>/dev/null; then
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    YELLOW='\033[0;33m'
    BLUE='\033[0;34m'
    ORANGE='\033[0;38;5;208m'
    BOLD='\033[1m'
    DIM='\033[2m'
    RESET='\033[0m'
else
    RED='' GREEN='' YELLOW='' BLUE='' ORANGE='' BOLD='' DIM='' RESET=''
fi

main() {
    banner
    detect_platform
    resolve_version
    choose_directory
    build_urls
    download_and_verify
    install_binary
    print_success
}

banner() {
    printf "\n"
    printf "  ${ORANGE}${BOLD}  ███████╗███████╗██████╗ ██████╗ ██╗   ██╗███╗   ███╗ ██████╗${RESET}\n"
    printf "  ${ORANGE}${BOLD}  ██╔════╝██╔════╝██╔══██╗██╔══██╗██║   ██║████╗ ████║██╔════╝${RESET}\n"
    printf "  ${ORANGE}${BOLD}  █████╗  █████╗  ██████╔╝██████╔╝██║   ██║██╔████╔██║██║     ${RESET}\n"
    printf "  ${ORANGE}${BOLD}  ██╔══╝  ██╔══╝  ██╔══██╗██╔══██╗██║   ██║██║╚██╔╝██║██║     ${RESET}\n"
    printf "  ${ORANGE}${BOLD}  ██║     ███████╗██║  ██║██║  ██║╚██████╔╝██║ ╚═╝ ██║╚██████╗${RESET}\n"
    printf "  ${ORANGE}${BOLD}  ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝ ╚═════╝${RESET}\n"
    printf "\n"
    printf "  ${DIM}A high-performance Minecraft server written in Rust${RESET}\n"
    printf "  ${DIM}https://github.com/ferrumc-rs/ferrumc${RESET}\n"
    printf "\n"
}

detect_platform() {
    OS="$(uname -s)"
    ARCH="$(uname -m)"

    case "$OS" in
        Linux)
            case "$ARCH" in
                x86_64)  TARGET="x86_64-unknown-linux-musl" ;;
                aarch64) TARGET="aarch64-unknown-linux-musl" ;;
                *)       error "Unsupported architecture: ${BOLD}$ARCH${RESET} — Linux supports x86_64 and aarch64" ;;
            esac
            ;;
        Darwin)
            case "$ARCH" in
                arm64)   TARGET="aarch64-apple-darwin" ;;
                *)       error "Unsupported architecture: ${BOLD}$ARCH${RESET} — macOS only supports arm64 (Apple Silicon)" ;;
            esac
            ;;
        *)
            error "Unsupported OS: ${BOLD}$OS${RESET}\n\n  On Windows, use PowerShell:\n  ${BOLD}irm https://ferrumc.com/install.ps1 | iex${RESET}"
            ;;
    esac

    EXT="tar.gz"
    info "Platform    ${BOLD}$OS $ARCH${RESET} ${DIM}($TARGET)${RESET}"
}

resolve_version() {
    if [ -n "${VERSION:-}" ]; then
        TAG="$VERSION"
    else
        TAG="$(curl -fsSL "https://api.github.com/repos/$REPO/releases/latest" \
            | grep '"tag_name"' \
            | sed -E 's/.*"tag_name": *"([^"]+)".*/\1/')"

        if [ -z "$TAG" ]; then
            error "Failed to fetch latest release from GitHub"
        fi
    fi

    info "Version     ${BOLD}$TAG${RESET}"
}

choose_directory() {
    # If INSTALL_DIR is set via env, use it directly
    if [ -n "${INSTALL_DIR:-}" ]; then
        DIR_NAME="$INSTALL_DIR"
        info "Directory   ${BOLD}$DIR_NAME${RESET} ${DIM}(from \$INSTALL_DIR)${RESET}"
        return
    fi

    DIR_NAME="$DEFAULT_DIR"

    # Try to read from /dev/tty for interactive input (works even when piped)
    if [ -t 0 ] || [ -e /dev/tty ]; then
        printf "\n"
        printf "  ${BOLD}Server directory name${RESET} ${DIM}[${DEFAULT_DIR}]${RESET}: "

        user_input=""
        if [ -t 0 ]; then
            read -r user_input
        elif [ -e /dev/tty ]; then
            read -r user_input </dev/tty
        fi

        if [ -n "${user_input:-}" ]; then
            DIR_NAME="$user_input"
        fi
    fi

    if [ -d "$DIR_NAME" ]; then
        warn "Directory ${BOLD}$DIR_NAME${RESET} already exists — installing into it"
    fi

    info "Directory   ${BOLD}$(pwd)/$DIR_NAME${RESET}"
}

build_urls() {
    ARCHIVE_NAME="$BINARY_NAME-$TAG-$TARGET.$EXT"
    BASE_URL="https://github.com/$REPO/releases/download/$TAG"
    ARCHIVE_URL="$BASE_URL/$ARCHIVE_NAME"
    CHECKSUM_URL="$BASE_URL/$ARCHIVE_NAME.sha256"
}

download_and_verify() {
    TMPDIR="$(mktemp -d)"
    trap 'rm -rf "$TMPDIR"' EXIT

    printf "\n"
    step "Downloading ${BOLD}$ARCHIVE_NAME${RESET}..."
    curl -fSL --progress-bar -o "$TMPDIR/$ARCHIVE_NAME" "$ARCHIVE_URL"

    step "Downloading checksum..."
    curl -fsSL -o "$TMPDIR/$ARCHIVE_NAME.sha256" "$CHECKSUM_URL"

    step "Verifying SHA-256 checksum..."
    cd "$TMPDIR"
    if command -v sha256sum >/dev/null 2>&1; then
        sha256sum -c "$ARCHIVE_NAME.sha256" >/dev/null 2>&1
    elif command -v shasum >/dev/null 2>&1; then
        shasum -a 256 -c "$ARCHIVE_NAME.sha256" >/dev/null 2>&1
    else
        warn "No sha256sum or shasum found — skipping verification"
        cd - >/dev/null
        return
    fi
    cd - >/dev/null
    printf "  ${GREEN}✓${RESET} Checksum verified\n"

    step "Extracting binary..."
    tar -xzf "$TMPDIR/$ARCHIVE_NAME" -C "$TMPDIR"

    if [ ! -f "$TMPDIR/$BINARY_NAME" ]; then
        error "Expected binary '${BOLD}$BINARY_NAME${RESET}' not found in archive"
    fi
}

install_binary() {
    mkdir -p "$DIR_NAME"
    mv "$TMPDIR/$BINARY_NAME" "$DIR_NAME/$BINARY_NAME"
    chmod +x "$DIR_NAME/$BINARY_NAME"
}

print_success() {
    printf "\n"
    printf "  ${GREEN}${BOLD}✓ FerrumC $TAG installed successfully!${RESET}\n"
    printf "\n"
    printf "  ${DIM}─────────────────────────────────────────${RESET}\n"
    printf "\n"
    printf "  ${BOLD}To start your server:${RESET}\n"
    printf "\n"
    printf "    ${BLUE}cd${RESET} %s\n" "$DIR_NAME"
    printf "    ${BLUE}./${BINARY_NAME}${RESET}\n"
    printf "\n"
    printf "  ${DIM}Docs:    https://docs.ferrumc.com${RESET}\n"
    printf "  ${DIM}Discord: https://discord.gg/qT5J8EMjwk${RESET}\n"
    printf "\n"
}

# ── Helpers ─────────────────────────────────────────────────────────────────

info() {
    printf "  ${BLUE}•${RESET} %b\n" "$*"
}

step() {
    printf "  ${ORANGE}→${RESET} %b\n" "$*"
}

warn() {
    printf "  ${YELLOW}⚠${RESET} %b\n" "$*" >&2
}

error() {
    printf "\n  ${RED}${BOLD}error:${RESET} %b\n\n" "$*" >&2
    exit 1
}

main
