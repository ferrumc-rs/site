import type { Release } from "./releases";

export function getMockReleases(): Release[] {
  return [
    {
      version: "v0.3.0",
      date: new Date("2024-03-15").toISOString(),
      changelog: `## What's New
- **Performance**: 40% faster chunk loading
- **Features**: Added support for custom dimensions
- **Improvements**: Better memory management
- **Bug Fixes**: Fixed player teleportation issues
- **Dependencies**: Updated to latest Rust nightly

## Breaking Changes
- Configuration format has changed, see migration guide

## Contributors
Thank you to all our contributors who made this release possible!`,
      assets: [
        {
          platform: "windows-x64",
          url: "#",
          filename: "ferrumc-v0.3.0-x86_64-pc-windows-msvc.exe",
          size: 15728640, // 15 MB
        },
        {
          platform: "linux-x64",
          url: "#",
          filename: "ferrumc-v0.3.0-x86_64-unknown-linux-gnu",
          size: 12582912, // 12 MB
        },
        {
          platform: "linux-arm64",
          url: "#",
          filename: "ferrumc-v0.3.0-aarch64-unknown-linux-gnu",
          size: 11534336, // 11 MB
        },
        {
          platform: "macos-arm64",
          url: "#",
          filename: "ferrumc-v0.3.0-aarch64-apple-darwin",
          size: 12582912, // 12 MB
        },
      ],
      dockerTag: "v0.3.0",
    },
    {
      version: "v0.2.5",
      date: new Date("2024-02-28").toISOString(),
      changelog: `## Highlights
- **New**: Redis support for cross-server communication
- **Security**: Enhanced authentication system
- **Logging**: Improved logging with structured output
- **UI**: Better console interface

## Bug Fixes
- Fixed memory leak in chunk caching
- Resolved connection timeout issues
- Fixed entity tracking bugs`,
      assets: [
        {
          platform: "windows-x64",
          url: "#",
          filename: "ferrumc-v0.2.5-x86_64-pc-windows-msvc.exe",
          size: 14680064,
        },
        {
          platform: "linux-x64",
          url: "#",
          filename: "ferrumc-v0.2.5-x86_64-unknown-linux-gnu",
          size: 11534336,
        },
        {
          platform: "linux-arm64",
          url: "#",
          filename: "ferrumc-v0.2.5-aarch64-unknown-linux-gnu",
          size: 10485760,
        },
        {
          platform: "macos-arm64",
          url: "#",
          filename: "ferrumc-v0.2.5-aarch64-apple-darwin",
          size: 11534336,
        },
      ],
      dockerTag: "v0.2.5",
    },
    {
      version: "v0.2.0",
      date: new Date("2024-02-01").toISOString(),
      changelog: `## Major Update
- **New**: Plugin system (experimental)
- **Config**: New YAML-based configuration
- **Worlds**: Multi-world support
- **Metrics**: Built-in Prometheus metrics

## Known Issues
- Plugin API is still experimental
- Some edge cases in world generation`,
      assets: [
        {
          platform: "windows-x64",
          url: "#",
          filename: "ferrumc-v0.2.0-x86_64-pc-windows-msvc.exe",
          size: 13631488,
        },
        {
          platform: "linux-x64",
          url: "#",
          filename: "ferrumc-v0.2.0-x86_64-unknown-linux-gnu",
          size: 10485760,
        },
        {
          platform: "macos-arm64",
          url: "#",
          filename: "ferrumc-v0.2.0-aarch64-apple-darwin",
          size: 10485760,
        },
      ],
      dockerTag: "v0.2.0",
    },
    {
      version: "v0.1.5",
      date: new Date("2024-01-15").toISOString(),
      changelog: `## Improvements
- **Performance**: Optimized network packet handling
- **Stability**: Fixed several crash-on-startup issues
- **World Gen**: Improved terrain generation speed
- **Commands**: Added more admin commands

## Bug Fixes
- Fixed player inventory sync issues
- Resolved chunk border artifacts
- Fixed mob spawning rates`,
      assets: [
        {
          platform: "windows-x64",
          url: "#",
          filename: "ferrumc-v0.1.5-x86_64-pc-windows-msvc.exe",
          size: 12582912,
        },
        {
          platform: "linux-x64",
          url: "#",
          filename: "ferrumc-v0.1.5-x86_64-unknown-linux-gnu",
          size: 9437184,
        },
        {
          platform: "linux-arm64",
          url: "#",
          filename: "ferrumc-v0.1.5-aarch64-unknown-linux-gnu",
          size: 8388608,
        },
        {
          platform: "macos-arm64",
          url: "#",
          filename: "ferrumc-v0.1.5-aarch64-apple-darwin",
          size: 9437184,
        },
      ],
      dockerTag: "v0.1.5",
    },
    {
      version: "v0.1.0",
      date: new Date("2023-12-20").toISOString(),
      changelog: `## 🎉 Initial Public Release

This is the first public release of FerrumC!

### Features
- Basic Minecraft server functionality
- Support for Minecraft 1.20.x clients
- Fast chunk loading and generation
- Multi-threaded architecture
- Docker support

### Supported Platforms
- Windows x64
- Linux x64
- Linux ARM64 (Raspberry Pi, etc.)
- macOS Apple Silicon

### Known Limitations
- Limited block types supported
- No redstone yet
- Some advanced features missing

Thank you for trying FerrumC! Please report any issues on GitHub.`,
      assets: [
        {
          platform: "windows-x64",
          url: "#",
          filename: "ferrumc-v0.1.0-x86_64-pc-windows-msvc.exe",
          size: 11534336,
        },
        {
          platform: "linux-x64",
          url: "#",
          filename: "ferrumc-v0.1.0-x86_64-unknown-linux-gnu",
          size: 8388608,
        },
        {
          platform: "linux-arm64",
          url: "#",
          filename: "ferrumc-v0.1.0-aarch64-unknown-linux-gnu",
          size: 7340032,
        },
      ],
      dockerTag: "v0.1.0",
    },
  ];
}
