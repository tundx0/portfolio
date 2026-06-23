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
          ? "bg-[rgba(2,8,23,0.92)] backdrop-blur-xl border-b border-[rgba(0,240,255,0.12)] shadow-[0_4px_40px_rgba(0,240,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex h-16 justify-between items-center px-6 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          className="relative font-cyber text-xl font-bold text-[#00f0ff] tracking-wider"
          style={{ textShadow: "0 0 20px rgba(0,240,255,0.6)" }}
        >
          <span className="opacity-40 text-sm mr-1">&lt;</span>
          OLA
          <span className="opacity-40 text-sm ml-1">/&gt;</span>
          <span className="absolute -bottom-0.5 left-0 w-full h-px bg-gradient-to-r from-[#00f0ff] to-[#b900ff] opacity-60" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NavItems.map((item) => (
            <li key={item.link}>
              <a href={item.link} className="nav-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex btn-cyber text-xs"
        >
          Hire Me
        </a>

        {/* Mobile Burger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-[#00f0ff] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#00f0ff] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#00f0ff] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-[rgba(2,8,23,0.96)] backdrop-blur-xl z-[9990] flex flex-col items-center justify-center gap-8"
          onClick={closeMenu}
        >
          {NavItems.map((item) => (
            <a
              key={item.link}
              href={item.link}
              onClick={closeMenu}
              className="font-cyber text-2xl font-bold text-[#7a9bbf] hover:text-[#00f0ff] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="btn-cyber mt-4">
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
