"use client";

import Image from "next/image";
import { SocialIcons } from "@/lib/utils";
import { useEffect, useState } from "react";

const ROLES = [
  "Full Stack Engineer",
  "Blockchain Developer",
  "Web3 Architect",
  "Smart Contract Dev",
  "EVM Specialist",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center cyber-grid-bg overflow-hidden"
    >
      {/* Background Glows */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,240,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(185,0,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT — Text Content */}
        <div className="space-y-8 animate-slide-up">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[rgba(0,240,255,0.2)] rounded-full bg-[rgba(0,240,255,0.05)] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="font-mono-cyber text-xs text-[#00ff88] tracking-widest">
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Name */}
          <div>
            <p className="section-label mb-2">01. Hello, World</p>
            <h1 className="font-cyber text-5xl md:text-6xl xl:text-7xl font-black leading-none mb-4">
              <span className="text-white">OLATUNDE</span>
              <br />
              <span
                className="text-transparent"
                style={{
                  WebkitTextStroke: "1px rgba(0,240,255,0.6)",
                }}
              >
                ADEGBOYEBO
              </span>
            </h1>

            {/* Typewriter Role */}
            <div className="flex items-center gap-2 font-mono-cyber text-lg md:text-xl text-[#00f0ff]">
              <span className="opacity-40">&gt;_</span>
              <span>{displayed}</span>
              <span className="w-0.5 h-5 bg-[#00f0ff] animate-blink" />
            </div>
          </div>

          {/* Bio */}
          <p className="text-[#7a9bbf] text-base md:text-lg leading-relaxed max-w-lg">
            I build <span className="text-[#00f0ff]">non-custodial payment systems</span>,{" "}
            <span className="text-[#b900ff]">EVM smart contracts</span>, and full-stack
            applications that ship to production. Currently working at{" "}
            <span className="text-white font-medium">Wellnite Inc.</span> (Remote, US).
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="btn-cyber">
              View Projects
            </a>
            <a href="#contact" className="btn-cyber btn-cyber-purple">
              Get In Touch
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-2">
            {SocialIcons.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-[#3d5a7a] hover:text-[#00f0ff] transition-all duration-300 hover:scale-110"
                  style={{ filter: "drop-shadow(0 0 8px rgba(0,240,255,0))" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.filter =
                      "drop-shadow(0 0 8px rgba(0,240,255,0.6))")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.filter =
                      "drop-shadow(0 0 8px rgba(0,240,255,0))")
                  }
                >
                  <IconComponent size={22} />
                </a>
              );
            })}
            <div className="flex-1 h-px bg-gradient-to-r from-[rgba(0,240,255,0.3)] to-transparent" />
          </div>
        </div>

        {/* RIGHT — Avatar */}
        <div className="flex justify-center items-center">
          <div className="relative animate-float">
            {/* Spinning ring */}
            <div className="avatar-ring">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[rgba(0,240,255,0.3)] relative z-10">
                <Image
                  src="/ola_pic.png"
                  alt="Olatunde Adegboyebo"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Cyan tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,240,255,0.15)] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Stats floating badges */}
            <div
              className="absolute -left-6 top-8 cyber-glass px-4 py-2 rounded-lg border border-[rgba(0,240,255,0.2)]"
              style={{ animation: "float 3s ease-in-out infinite 0.5s" }}
            >
              <p className="font-mono-cyber text-[10px] text-[#7a9bbf]">EXPERIENCE</p>
              <p className="font-cyber text-lg font-bold text-[#00f0ff]">3+ YRS</p>
            </div>

            <div
              className="absolute -right-6 bottom-12 cyber-glass px-4 py-2 rounded-lg border border-[rgba(185,0,255,0.2)]"
              style={{ animation: "float 3s ease-in-out infinite 1s" }}
            >
              <p className="font-mono-cyber text-[10px] text-[#7a9bbf]">PROJECTS</p>
              <p className="font-cyber text-lg font-bold text-[#b900ff]">10+</p>
            </div>

            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 cyber-glass px-4 py-2 rounded-lg border border-[rgba(0,255,136,0.2)]"
              style={{ animation: "float 3s ease-in-out infinite 1.5s" }}
            >
              <p className="font-mono-cyber text-[10px] text-[#7a9bbf]">BLOCKCHAIN</p>
              <p className="font-cyber text-sm font-bold text-[#00ff88]">WEB3 NATIVE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono-cyber text-[10px] text-[#3d5a7a] tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#00f0ff] to-transparent opacity-60 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
