"use client";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  tech: string[];
  tags: string[];
  github: string;
  live?: string;
  docs?: string;
  accent: string;
  accentSecondary: string;
  featured?: boolean;
  status: "Live" | "In Progress" | "Open Source";
}

const projects: Project[] = [
  {
    id: 1,
    title: "ChainPay",
    subtitle: "Non-Custodial Web3 Payment Gateway",
    description:
      "Developer-first crypto payment gateway with live on-chain telemetry. Merchants receive funds directly to their wallet — ChainPay never holds assets.",
    longDesc:
      "Built as a pnpm + Turborepo monorepo. Features a cyberpunk merchant dashboard, customer checkout, REST API, EVM blockchain watcher, Inngest durable workflows, HMAC-signed webhooks, and an embeddable widget SDK with React, React Native, and vanilla JS adapters. Self-hosted with Docker Compose + Caddy.",
    tech: [
      "Next.js", "TypeScript", "Express", "PostgreSQL",
      "Drizzle ORM", "Solidity", "Wagmi", "Inngest",
      "Docker", "Turborepo", "pnpm",
    ],
    tags: ["Web3", "Blockchain", "Full Stack", "DevOps"],
    github: "https://github.com/tundx0/chainpay",
    docs: "https://chainpay-docs.vercel.app",
    accent: "#00f0ff",
    accentSecondary: "#b900ff",
    featured: true,
    status: "Open Source",
  },
  {
    id: 2,
    title: "Escrow Blockchain App",
    subtitle: "Decentralized Trustless Escrow Platform",
    description:
      "Premium decentralized escrow app facilitating trustless on-chain transactions between buyers and sellers with EIP-191 cryptographic authentication.",
    longDesc:
      "Features an interactive QR checkout display with ERC-681 URIs, EIP-191 signature-authenticated participant chat, and auto-generated type-safe React hooks via Wagmi CLI. Built with Foundry for smart contract tooling and Next.js for the frontend.",
    tech: [
      "Solidity", "Foundry", "Next.js", "Wagmi v2",
      "Viem", "RainbowKit", "TypeScript", "Tailwind CSS v4",
    ],
    tags: ["Blockchain", "Web3", "Smart Contracts", "DeFi"],
    github: "https://github.com/tundx0/Escrow-blockchain-app",
    accent: "#b900ff",
    accentSecondary: "#ff006e",
    featured: true,
    status: "Open Source",
  },
  {
    id: 3,
    title: "AI Job Search Assistant",
    subtitle: "ATS-Optimized Resume & Cover Letter Generator",
    description:
      "AI-powered app that generates tailored, ATS-optimized resumes and cover letters from job descriptions. Built to explore modern system design and modular architecture.",
    longDesc:
      "A pet project built to solve the pain of tailoring resumes to each job application. Uses AI to analyze job descriptions and generate targeted content. Features modular architecture with clean separation of concerns.",
    tech: ["TypeScript", "Next.js", "AI/LLM", "Node.js"],
    tags: ["AI", "Full Stack", "Developer Tools"],
    github: "https://github.com/tundx0/job-search-assistant",
    accent: "#00ff88",
    accentSecondary: "#00f0ff",
    featured: false,
    status: "Open Source",
  },
  {
    id: 4,
    title: "Tiny House",
    subtitle: "Full-Stack GraphQL Property Platform",
    description:
      "Full-stack property listing platform built with React, TypeScript, Node.js, and GraphQL. Features real-time data synchronization and complex filtering.",
    longDesc:
      "Demonstrates advanced GraphQL patterns including mutations, resolvers, and TypeScript-first schema design. Built with a React frontend and a Node.js backend.",
    tech: ["React", "TypeScript", "Node.js", "GraphQL"],
    tags: ["Full Stack", "GraphQL"],
    github: "https://github.com/tundx0/tiny-house",
    accent: "#ffea00",
    accentSecondary: "#ff006e",
    featured: false,
    status: "Open Source",
  },
  {
    id: 5,
    title: "Go Movies Backend",
    subtitle: "RESTful Movie API in Go",
    description:
      "A RESTful backend API for a movie database, built in Go. Demonstrates idiomatic Go patterns for building performant and type-safe web services.",
    longDesc:
      "Explores Go's standard library, routing, middleware, and JSON serialization for building a clean, production-style REST API.",
    tech: ["Go", "REST API"],
    tags: ["Backend", "Go"],
    github: "https://github.com/tundx0/go-movies-backend",
    accent: "#00f0ff",
    accentSecondary: "#00ff88",
    featured: false,
    status: "Open Source",
  },
];

const FILTERS = ["All", "Web3", "Full Stack", "AI", "Backend"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter(
    (p) =>
      activeFilter === "All" ||
      p.tags.some((t) => t === activeFilter)
  );

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section
      id="portfolio"
      className="relative py-32 px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Section Header */}
      <div className="mb-12">
        <p className="section-label">05. Portfolio</p>
        <h2 className="section-title">Projects</h2>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#00f0ff] to-[#b900ff]" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-16">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`font-mono-cyber text-xs px-5 py-2 tracking-widest uppercase transition-all duration-300 ${
              activeFilter === f
                ? "bg-[#00f0ff] text-black font-bold"
                : "border border-[rgba(0,240,255,0.2)] text-[#7a9bbf] hover:border-[#00f0ff] hover:text-[#00f0ff]"
            }`}
            style={{
              clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <div className="space-y-8 mb-12">
          {featured.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Other Projects Grid */}
      {rest.length > 0 && (
        <>
          <h3 className="font-cyber text-sm text-[#3d5a7a] tracking-widest uppercase mb-6">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project) => (
              <SmallCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="font-mono-cyber text-[#3d5a7a]">No projects found for this filter.</p>
        </div>
      )}
    </section>
  );
};

const FeaturedCard = ({ project }: { project: Project }) => (
  <div
    className="project-card group"
    style={{ borderColor: `${project.accent}22` }}
  >
    <div className="p-8 grid md:grid-cols-5 gap-8 items-start">
      {/* Content — 3 cols */}
      <div className="md:col-span-3 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="font-mono-cyber text-[10px] px-2 py-1 tracking-widest uppercase"
            style={{
              color: project.accent,
              background: `${project.accent}11`,
              border: `1px solid ${project.accent}33`,
            }}
          >
            Featured
          </span>
          <span
            className="font-mono-cyber text-[10px] px-2 py-1 tracking-widest uppercase"
            style={{
              color:
                project.status === "Live"
                  ? "#00ff88"
                  : project.status === "In Progress"
                  ? "#ffea00"
                  : "#7a9bbf",
              background:
                project.status === "Live"
                  ? "rgba(0,255,136,0.08)"
                  : project.status === "In Progress"
                  ? "rgba(255,234,0,0.08)"
                  : "rgba(122,155,191,0.08)",
              border: `1px solid ${
                project.status === "Live"
                  ? "rgba(0,255,136,0.2)"
                  : project.status === "In Progress"
                  ? "rgba(255,234,0,0.2)"
                  : "rgba(122,155,191,0.2)"
              }`,
            }}
          >
            {project.status}
          </span>
        </div>

        <div>
          <h3
            className="font-cyber text-2xl font-bold"
            style={{ color: project.accent }}
          >
            {project.title}
          </h3>
          <p className="font-mono-cyber text-xs text-[#7a9bbf] mt-1">
            {project.subtitle}
          </p>
        </div>

        <p className="text-[#7a9bbf] leading-relaxed">{project.description}</p>
        <p className="text-[#3d5a7a] text-sm leading-relaxed">{project.longDesc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono-cyber text-[10px] px-3 py-1 rounded-full"
              style={{
                background: `${project.accentSecondary}11`,
                border: `1px solid ${project.accentSecondary}33`,
                color: project.accentSecondary,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right — 2 cols */}
      <div className="md:col-span-2 space-y-4 flex flex-col justify-between h-full">
        {/* Tech stack */}
        <div>
          <p className="font-mono-cyber text-[10px] text-[#3d5a7a] tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono-cyber text-[10px] px-2 py-1"
                style={{
                  background: `${project.accent}08`,
                  border: `1px solid ${project.accent}22`,
                  color: project.accent,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber text-xs"
            style={{ borderColor: project.accent, color: project.accent }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
          {project.docs && (
            <a
              href={project.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber btn-cyber-purple text-xs"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Documentation
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber text-xs"
              style={{ borderColor: "#00ff88", color: "#00ff88" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const SmallCard = ({ project }: { project: Project }) => (
  <div
    className="project-card p-6 space-y-4 group"
    style={{ borderColor: `${project.accent}22` }}
  >
    <div className="flex items-start justify-between">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke={project.accent}
        strokeWidth="1.5"
        style={{ filter: `drop-shadow(0 0 8px ${project.accent}44)` }}
      >
        <path d="M3 7h4l3 9 3-9h4" />
        <path d="M3 17h18" />
      </svg>
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3d5a7a] hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3d5a7a] hover:text-white transition-colors"
            aria-label="Live"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>
    </div>

    <div>
      <h3 className="font-cyber text-base font-bold text-white group-hover:text-[#00f0ff] transition-colors">
        {project.title}
      </h3>
      <p className="font-mono-cyber text-[11px] text-[#7a9bbf] mt-0.5">{project.subtitle}</p>
    </div>

    <p className="text-[#7a9bbf] text-sm leading-relaxed line-clamp-3">{project.description}</p>

    <div className="flex flex-wrap gap-1.5 pt-1">
      {project.tech.slice(0, 4).map((t) => (
        <span
          key={t}
          className="font-mono-cyber text-[10px] px-2 py-0.5"
          style={{
            background: `${project.accent}08`,
            border: `1px solid ${project.accent}22`,
            color: project.accent,
          }}
        >
          {t}
        </span>
      ))}
      {project.tech.length > 4 && (
        <span className="font-mono-cyber text-[10px] px-2 py-0.5 text-[#3d5a7a]">
          +{project.tech.length - 4}
        </span>
      )}
    </div>
  </div>
);

export default Portfolio;
