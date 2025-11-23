import { useState, useEffect, useRef } from "react";

interface MobileMenuProps {
  className?: string;
}

export default function MobileMenu({ className = "" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isOpen) return;
      const target = event.target as Node;
      if (
        buttonRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        id="mobile-menu-button"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        aria-label="Open menu"
        onClick={toggleMenu}
        className={`md:hidden justify-self-end inline-flex items-center p-2 rounded-md bg-white/10 hover:bg-white/15 ${className}`}
      >
        <span className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </span>
      </button>

      <div
        ref={panelRef}
        id="mobile-menu"
        className={`md:hidden absolute left-0 right-0 top-full mt-2 px-5 z-40 transition-all duration-200 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        data-open={isOpen}
      >
        <div className="rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur shadow-2xl p-3">
          <a
            href="#features"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-lg hover:bg-white/10"
          >
            Features
          </a>
          <a
            href="/downloads"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-lg hover:bg-white/10"
          >
            Downloads
          </a>
          <a
            href="#blog"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-lg hover:bg-white/10"
          >
            Blog
          </a>
          <a
            href="https://docs.ferrumc.com/"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-lg hover:bg-white/10"
          >
            Documentation
          </a>
          <div className="h-px my-2 bg-white/10"></div>
          <a
            href="https://github.com/ferrumc-rs/ferrumc"
            onClick={closeMenu}
            className="block px-3 py-2 rounded-lg hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
