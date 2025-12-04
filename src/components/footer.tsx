import Image from 'next/image';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BiCoffeeTogo } from 'react-icons/bi';
import Link from 'next/link';

interface NavLink {
  name: string;
  url: string;
  external?: boolean;
}

interface Category {
  name: string;
  links: NavLink[];
}

export default function Footer() {
  const categories: Category[] = [
    {
      name: 'Product',
      links: [
        { name: 'Features', url: '/features' },
        { name: 'Download', url: '/download' },
        { name: 'Benchmarks', url: '/benchmarks' },
      ],
    },
    {
      name: 'Resources',
      links: [
        { name: 'Documentation', url: 'https://docs.ferrumc.com/', external: true },
        { name: 'API Reference', url: 'https://docs.ferrumc.com/api', external: true },
        { name: 'Blog', url: '/blog' },
      ],
    },
    {
      name: 'Community',
      links: [
        { name: 'Buy us a coffee!', url: 'https://buymeacoffee.com/ferrumc', external: true },
        { name: 'GitHub', url: 'https://github.com/ferrumc-rs/ferrumc', external: true },
        { name: 'Discord', url: 'https://discord.gg/qT5J8EMjwk', external: true },
        { name: 'X', url: 'https://x.com/ferrumc_rs', external: true },
      ],
    },
    {
      name: 'Development',
      links: [
        { name: 'Contributing', url: '/dev/contributing' },
        { name: 'Roadmap', url: '/dev/roadmap' },
        { name: 'Changelog', url: '/dev/changelog' },
      ],
    },
    {
      name: 'Legal',
      links: [
        { name: 'Terms of Service', url: '/legal/terms' },
        { name: 'Privacy Policy', url: '/legal/privacy' },
        { name: 'License', url: '/legal/license' },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/10 mt-auto">
      <div className="mx-auto max-w-[1100px] px-5 py-12">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo.png"
                alt="FerrumC"
                width={32}
                height={32}
                className="h-8 w-8 rounded bg-transparent border border-white/[0.08] mix-blend-lighten"
              />
              <span className="text-lg font-bold">FerrumC</span>
            </Link>

            <p className="text-sm text-neutral-400 mb-4 max-w-xs">
              A fully multi-threaded Minecraft server built in Rust for maximum performance.
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/ferrumc-rs/ferrumc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://discord.gg/qT5J8EMjwk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <FaDiscord />
              </a>
              <a
                href="https://buymeacoffee.com/ferrumc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <BiCoffeeTogo />
              </a>
              <a
                href="https://x.com/ferrumc_rs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Dynamic link columns */}
          {categories.map((category) => (
            <div key={category.name} className="col-span-1">
              <h3 className="font-semibold mb-4 text-sm">{category.name}</h3>
              <ul className="space-y-3">
                {category.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-sm text-neutral-400">
              <Link
                href="https://github.com/ferrumc-rs/ferrumc/blob/master/LICENSE"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                © {new Date().getFullYear()} FerrumC. Licensed under MIT.
              </Link>
            </div>
            <div className="text-xs text-neutral-500 max-w-2xl text-left md:text-right">
              This website is not affiliated with Mojang Studios or Microsoft.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
