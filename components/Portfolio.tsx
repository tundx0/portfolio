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
  featured?: boolean;
  status: "Live" | "In Progress" | "Open Source";
}

const projects: Project[] = [
  {
    id: 1,
    title: "ChainPay",
    subtitle: "Non-Custodial Payment Gateway",
    description:
      "Developer-first payment gateway with live on-chain telemetry. A backend-heavy monorepo with a REST API, durable workflows, and signed webhooks.",
    longDesc:
      "Built as a pnpm + Turborepo monorepo. Features a merchant dashboard, customer checkout, REST API, blockchain watcher service, Inngest durable workflows, HMAC-signed webhooks, and an embeddable widget SDK. Self-hosted with Docker Compose + Caddy.",
    tech: [
      "Express", "PostgreSQL", "Drizzle ORM", "Inngest",
      "Next.js", "TypeScript", "Docker", "Turborepo", "pnpm",
    ],
    tags: ["Backend", "Full Stack", "DevOps", "Web3"],
    github: "https://github.com/tundx0/chainpay",
    docs: "https://chainpay-docs.vercel.app",
    featured: true,
    status: "Open Source",
  },
  {
    id: 2,
    title: "AI Job Search Assistant",
    subtitle: "ATS-Optimized Resume & Cover Letter Generator",
    description:
      "AI-powered app that generates tailored, ATS-optimized resumes and cover letters from job descriptions. Built to explore modern system design and modular architecture.",
    longDesc:
      "A project built to solve the pain of tailoring resumes to each application. Uses AI to analyze job descriptions and generate targeted content. Modular architecture with clean separation of concerns.",
    tech: ["Node.js", "TypeScript", "Next.js", "AI/LLM"],
    tags: ["Backend", "Full Stack", "AI"],
    github: "https://github.com/tundx0/job-search-assistant",
    featured: true,
    status: "Open Source",
  },
  {
    id: 3,
    title: "Go Movies Backend",
    subtitle: "RESTful Movie API in Go",
    description:
      "A RESTful backend API for a movie database, built in Go. Demonstrates idiomatic Go patterns for building performant and type-safe web services.",
    longDesc:
      "Explores Go's standard library, routing, middleware, and JSON serialization for building a clean, production-style REST API.",
    tech: ["Go", "REST API"],
    tags: ["Backend"],
    github: "https://github.com/tundx0/go-movies-backend",
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
    tech: ["Node.js", "GraphQL", "React", "TypeScript"],
    tags: ["Backend", "Full Stack"],
    github: "https://github.com/tundx0/tiny-house",
    featured: false,
    status: "Open Source",
  },
  {
    id: 5,
    title: "Escrow Blockchain App",
    subtitle: "Decentralized Trustless Escrow Platform",
    description:
      "Decentralized escrow app facilitating trustless transactions between buyers and sellers with EIP-191 cryptographic authentication.",
    longDesc:
      "Features an interactive QR checkout with ERC-681 URIs, EIP-191 signature-authenticated participant chat, and auto-generated type-safe hooks via Wagmi CLI. Built with Foundry and Next.js.",
    tech: ["Solidity", "Foundry", "Next.js", "TypeScript"],
    tags: ["Web3", "Full Stack"],
    github: "https://github.com/tundx0/Escrow-blockchain-app",
    featured: false,
    status: "Open Source",
  },
];

const FILTERS = ["All", "Backend", "Full Stack", "AI", "Web3"];

const statusColor = (status: Project["status"]) =>
  status === "Live"
    ? "text-accent"
    : status === "In Progress"
    ? "text-ink-soft"
    : "text-ink-muted";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter(
    (p) => activeFilter === "All" || p.tags.some((t) => t === activeFilter)
  );

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="relative py-28 md:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <p className="section-label">
          Portfolio <span className="jp">作品</span>
        </p>
        <h2 className="section-title">Selected Work</h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-16 border-b border-[color:var(--line)] pb-4">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`font-sans-jp text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
              activeFilter === f
                ? "text-accent"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Featured Projects */}
      {featured.length > 0 && (
        <div className="space-y-6 mb-16">
          {featured.map((project) => (
            <FeaturedCard key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Other Projects Grid */}
      {rest.length > 0 && (
        <>
          <h3 className="font-sans-jp text-xs text-ink-muted tracking-[0.25em] uppercase mb-8">
            More Projects
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
          <p className="font-sans-jp text-ink-muted">No projects found for this filter.</p>
        </div>
      )}
    </section>
  );
};

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const FeaturedCard = ({ project }: { project: Project }) => (
  <div className="card group p-8 md:p-10 grid md:grid-cols-5 gap-8 items-start">
    {/* Content — 3 cols */}
    <div className="md:col-span-3 space-y-4">
      <div className="flex items-center gap-4">
        <span className="font-sans-jp text-[0.65rem] tracking-[0.25em] uppercase text-accent">
          Featured
        </span>
        <span className={`font-sans-jp text-[0.65rem] tracking-[0.25em] uppercase ${statusColor(project.status)}`}>
          {project.status}
        </span>
      </div>

      <div>
        <h3 className="font-mincho text-2xl font-semibold text-ink">
          {project.title}
        </h3>
        <p className="font-sans-jp text-sm text-ink-muted mt-1">
          {project.subtitle}
        </p>
      </div>

      <p className="text-ink-soft leading-relaxed font-light">{project.description}</p>
      <p className="text-ink-muted text-sm leading-relaxed font-light">{project.longDesc}</p>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.tags.map((tag) => (
          <span key={tag} className="skill-tag text-[0.7rem]">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Right — 2 cols */}
    <div className="md:col-span-2 space-y-6 md:pl-8 md:border-l md:border-[color:var(--line)] h-full flex flex-col justify-between">
      <div>
        <p className="font-sans-jp text-[0.65rem] text-ink-muted tracking-[0.25em] uppercase mb-4">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          {project.tech.map((t) => (
            <span key={t} className="font-sans-jp text-sm text-ink-soft font-light">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-6">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn text-xs justify-center">
          <GithubIcon />
          View on GitHub
        </a>
        {project.docs && (
          <a href={project.docs} target="_blank" rel="noopener noreferrer" className="btn btn-accent text-xs justify-center">
            <ExternalIcon />
            Documentation
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn text-xs justify-center">
            <ExternalIcon />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const SmallCard = ({ project }: { project: Project }) => (
  <div className="card group p-7 space-y-4 flex flex-col">
    <div className="flex items-start justify-between">
      <span className={`font-sans-jp text-[0.6rem] tracking-[0.25em] uppercase ${statusColor(project.status)}`}>
        {project.status}
      </span>
      <div className="flex gap-4 text-ink-muted">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub">
          <GithubIcon />
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Live">
            <ExternalIcon />
          </a>
        )}
      </div>
    </div>

    <div>
      <h3 className="font-mincho text-xl font-semibold text-ink group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="font-sans-jp text-xs text-ink-muted mt-1">{project.subtitle}</p>
    </div>

    <p className="text-ink-soft text-sm leading-relaxed font-light line-clamp-3 flex-1">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-x-3 gap-y-1 pt-2 border-t border-[color:var(--line)]">
      {project.tech.slice(0, 4).map((t) => (
        <span key={t} className="font-sans-jp text-[0.7rem] text-ink-muted font-light">
          {t}
        </span>
      ))}
      {project.tech.length > 4 && (
        <span className="font-sans-jp text-[0.7rem] text-ink-faint">
          +{project.tech.length - 4}
        </span>
      )}
    </div>
  </div>
);

export default Portfolio;
