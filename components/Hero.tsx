"use client";

import Image from "next/image";
import { SocialIcons } from "@/lib/utils";
import { useEffect, useState } from "react";

const ROLES = [
  "Full Stack Engineer",
  "Backend Engineer",
  "API & Systems Design",
  "Node.js / TypeScript",
  "Cloud & DevOps",
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
      timeout = setTimeout(() => setDeleting(true), 2200);
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
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Faint vertical Japanese accent — negative space (ma) */}
      <span
        className="hidden lg:block absolute top-1/2 right-12 -translate-y-1/2 writing-vertical font-mincho text-ink-faint/50 text-sm tracking-[0.4em] select-none pointer-events-none"
        aria-hidden="true"
      >
        全 ての コード は 静 けさ から
      </span>

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT — Text Content */}
        <div className="space-y-8 animate-fade-up order-2 md:order-1">
          {/* Status */}
          <div className="inline-flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-sans-jp text-[0.7rem] font-medium text-ink-muted tracking-[0.3em] uppercase">
              Available for work
            </span>
          </div>

          {/* Name */}
          <div className="space-y-5">
            <p className="section-label">
              Hello <span className="jp">はじめまして</span>
            </p>
            <h1 className="font-mincho text-4xl md:text-5xl xl:text-6xl font-semibold leading-[1.15] text-ink">
              Olatunde
              <br />
              Adegboyebo
            </h1>

            {/* Typewriter Role */}
            <div className="flex items-center gap-2 font-sans-jp text-base md:text-lg text-ink-soft">
              <span className="text-accent">—</span>
              <span>{displayed}</span>
              <span className="inline-block w-px h-5 bg-ink-muted animate-fade-in" />
            </div>
          </div>

          {/* Bio */}
          <p className="text-ink-soft text-base leading-relaxed max-w-md font-light">
            I design and build <span className="text-ink font-medium">scalable backend
            systems</span>, clean APIs, and full-stack applications that ship to
            production. Currently engineering at{" "}
            <span className="text-ink font-medium">Wellnite Inc.</span>{" "}
            (Remote, US).
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#portfolio" className="btn btn-solid">
              View Work
            </a>
            <a href="#contact" className="btn">
              Get in Touch
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-4">
            {SocialIcons.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-ink-muted hover:text-accent transition-colors duration-300"
                >
                  <IconComponent size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT — Avatar */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <div className="relative">
            {/* Enso ring */}
            <div className="enso absolute -inset-5 md:-inset-7" aria-hidden="true" />
            <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border border-[color:var(--line)]">
              <Image
                src="/ola_pic.png"
                alt="Olatunde Adegboyebo"
                fill
                className="object-cover grayscale-[15%]"
                priority
              />
            </div>

            {/* Hanko-style seal accent */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center animate-float-soft">
              <span className="font-mincho text-paper text-lg md:text-xl leading-none">緒</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-sans-jp text-[0.6rem] text-ink-faint tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-ink-faint" />
      </div>
    </section>
  );
};

export default Hero;
