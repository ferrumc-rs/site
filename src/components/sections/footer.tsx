import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Performance", href: "#performance" },
    { label: "Download", href: "https://github.com/ferrumc-rs/ferrumc/releases" },
  ],
  Community: [
    { label: "GitHub", href: "https://github.com/ferrumc-rs/ferrumc" },
    { label: "Discord", href: "https://discord.gg/qT5J8EMjwk" },
    {
      label: "Contributing",
      href: "https://github.com/ferrumc-rs/ferrumc/blob/master/CONTRIBUTING.md",
    },
  ],
  Resources: [
    { label: "Documentation", href: "https://docs.ferrumc.com" },
    {
      label: "Changelog",
      href: "https://github.com/ferrumc-rs/ferrumc/releases",
    },
    {
      label: "License (MIT)",
      href: "https://github.com/ferrumc-rs/ferrumc/blob/master/LICENSE",
    },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="FerrumC" width={32} height={32} />
              <span className="font-display font-bold tracking-tight">
                FerrumC
              </span>
            </Link>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
              A high-performance Minecraft server implementation, written in
              Rust.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-neutral-300 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors duration-200"
                      {...(link.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} FerrumC. Open source under the MIT
            License.
          </p>
          <p className="text-xs text-neutral-600">Built with Rust</p>
        </div>
      </div>
    </footer>
  );
}
