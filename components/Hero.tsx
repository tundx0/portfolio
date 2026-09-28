"use client";

import Image from "next/image";
import { SocialIcons } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import SakuraField from "@/components/ui/SakuraField";

const ROLES = [
  "Full Stack Engineer",
  "Backend Engineer",
  "API & Systems Design",
  "Node.js / TypeScript",
  "Cloud & DevOps",
];

const NAME_LINES = ["Olatunde", "Adegboyebo"];

const Hero = () => {
  const portraitRef = useRef<HTMLDivElement>(null);
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

  // Portrait tilts gently toward the cursor.
  useEffect(() => {
    const el = portraitRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <SakuraField />

      {/* Faint vertical Japanese accent — negative space (ma) */}
      <span
        className="hidden lg:block absolute top-1/2 right-12 -translate-y-1/2 writing-vertical font-mincho text-ink-faint/50 text-sm tracking-[0.4em] select-none pointer-events-none"
        aria-hidden="true"
      >
        全 ての コード は 静 けさ から
      </span>

      <div className="relative max-w-7xl w-full mx-auto px-6 lg:px-12 py-32 grid md:grid-cols-2 gap-16 items-center">
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
            <h1
              className="font-mincho text-4xl md:text-5xl xl:text-6xl font-semibold leading-[1.15] text-ink"
              aria-label={NAME_LINES.join(" ")}
            >
              {NAME_LINES.map((line, li) => (
                <span key={line} className="block" aria-hidden="true">
                  {line.split("").map((ch, ci) => (
                    <span key={ci} className="rise-mask">
                      <span
                        className="rise-char"
                        style={{ animationDelay: `${0.25 + li * 0.18 + ci * 0.045}s` }}
                      >
                        {ch}
                      </span>
                    </span>
                  ))}
                </span>
              ))}
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

        {/* RIGHT — Portrait */}
        <div className="flex justify-center items-center order-1 md:order-2">
          <div
            ref={portraitRef}
            className="relative w-72 md:w-96 xl:w-[28rem] aspect-square transition-transform duration-500 ease-out will-change-transform"
          >
            {/* Enso ring — offset outline around the portrait disc */}
            <div className="enso absolute -inset-4 md:-inset-5" aria-hidden="true" />

            {/* Portrait disc — clips the cutout so the shoulders fade into the circle */}
            <div className="absolute inset-0 rounded-full overflow-hidden bg-paper-2 border border-paper-3">
              <div className="absolute inset-x-0 bottom-0 aspect-[1305/1205]">
                <Image
                  src="/olatunde-portrait.webp"
                  alt="Olatunde Adegboyebo"
                  fill
                  sizes="(min-width: 1280px) 28rem, (min-width: 768px) 24rem, 18rem"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* Hanko-style seal accent — sits on the disc's edge at 45° */}
            <div className="absolute left-[85.4%] top-[85.4%] -translate-x-1/2 -translate-y-1/2">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent ring-4 ring-paper flex items-center justify-center animate-float-soft">
                <span className="font-mincho text-paper text-lg md:text-xl leading-none">緒</span>
              </div>
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
