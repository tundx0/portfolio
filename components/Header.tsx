"use client";

import { NavItems } from "@/lib/utils";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(246,244,239,0.85)] backdrop-blur-md border-b border-[color:var(--line)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex h-20 justify-between items-center px-6 lg:px-12">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <span className="font-mincho text-lg text-accent leading-none">緒</span>
          <span className="font-mincho text-lg font-semibold text-ink tracking-[0.2em] leading-none">
            OLA
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {NavItems.map((item) => (
            <li key={item.link}>
              <a href={item.link} className="nav-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="hidden md:inline-flex btn text-xs">
          Hire Me
        </a>

        {/* Mobile Burger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-[rgba(246,244,239,0.98)] backdrop-blur-md z-[9990] flex flex-col items-center justify-center gap-8"
          onClick={closeMenu}
        >
          {NavItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={closeMenu}
              className="font-mincho text-2xl text-ink-soft hover:text-accent transition-colors tracking-wide"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="btn mt-4">
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
