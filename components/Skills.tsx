import React from "react";

interface Skill {
  name: string;
  icon?: string;
  level?: number; // 1-5
}

interface SkillGroup {
  category: string;
  color: "cyan" | "purple" | "green" | "pink";
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    color: "cyan",
    skills: [
      { name: "React / Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
      { name: "HTML5 / CSS3" },
      { name: "Wagmi / Viem" },
      { name: "RainbowKit" },
      { name: "TanStack Query" },
    ],
  },
  {
    category: "Backend",
    color: "purple",
    skills: [
      { name: "Node.js / Express" },
      { name: "PostgreSQL" },
      { name: "Drizzle ORM" },
      { name: "MongoDB" },
      { name: "REST APIs" },
      { name: "GraphQL" },
      { name: "Inngest Workflows" },
      { name: "Python" },
    ],
  },
  {
    category: "Blockchain / Web3",
    color: "green",
    skills: [
      { name: "Solidity" },
      { name: "Foundry / Forge" },
      { name: "EVM Smart Contracts" },
      { name: "ERC-20 / ERC-721" },
      { name: "Anvil (Local Chain)" },
      { name: "HMAC Webhooks" },
      { name: "On-chain Watcher" },
      { name: "EIP-191 Signatures" },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "pink",
    skills: [
      { name: "Docker / Compose" },
      { name: "AWS" },
      { name: "CI/CD (GitHub Actions)" },
      { name: "Turborepo" },
      { name: "pnpm Workspaces" },
      { name: "Caddy (Reverse Proxy)" },
      { name: "Git" },
      { name: "Linux / VPS" },
    ],
  },
];

const colorMap = {
  cyan:   { tag: "skill-tag",            border: "rgba(0,240,255,0.25)",   head: "#00f0ff" },
  purple: { tag: "skill-tag skill-tag-purple", border: "rgba(185,0,255,0.25)", head: "#b900ff" },
  green:  { tag: "skill-tag",            border: "rgba(0,255,136,0.25)",   head: "#00ff88" },
  pink:   { tag: "skill-tag",            border: "rgba(255,0,110,0.25)",   head: "#ff006e" },
};

const greenTag = "display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:rgba(0,255,136,0.06);border:1px solid rgba(0,255,136,0.2);border-radius:4px;font-family:'Share Tech Mono',monospace;font-size:0.8rem;color:#00ff88;transition:all 0.3s ease;clip-path:polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%)";
const pinkTag  = "display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:rgba(255,0,110,0.06);border:1px solid rgba(255,0,110,0.2);border-radius:4px;font-family:'Share Tech Mono',monospace;font-size:0.8rem;color:#ff006e;transition:all 0.3s ease;clip-path:polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%)";

const SkillCard: React.FC<{ group: SkillGroup }> = ({ group }) => {
  const col = colorMap[group.color];
  return (
    <div
      className="cyber-glass p-6 space-y-4"
      style={{ borderColor: col.border }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 pb-2 border-b border-[rgba(255,255,255,0.05)]">
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: col.head, boxShadow: `0 0 8px ${col.head}` }}
        />
        <h3
          className="font-cyber text-sm font-bold tracking-widest uppercase"
          style={{ color: col.head }}
        >
          {group.category}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill.name}
            className={
              group.color === "purple"
                ? "skill-tag skill-tag-purple"
                : group.color === "cyan"
                ? "skill-tag"
                : undefined
            }
            style={
              group.color === "green"
                ? {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    background: "rgba(0,255,136,0.06)",
                    border: "1px solid rgba(0,255,136,0.2)",
                    borderRadius: "4px",
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "0.8rem",
                    color: "#00ff88",
                    transition: "all 0.3s ease",
                    clipPath: "polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)",
                  }
                : group.color === "pink"
                ? {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    background: "rgba(255,0,110,0.06)",
                    border: "1px solid rgba(255,0,110,0.2)",
                    borderRadius: "4px",
                    fontFamily: "'Share Tech Mono', monospace",
                    fontSize: "0.8rem",
                    color: "#ff006e",
                    transition: "all 0.3s ease",
                    clipPath: "polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)",
                  }
                : undefined
            }
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => (
  <section
    id="skills"
    className="relative py-32 px-6 lg:px-12 max-w-7xl mx-auto"
  >
    {/* Background glow */}
    <div
      className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
      style={{
        background: "radial-gradient(circle, rgba(185,0,255,0.06) 0%, transparent 70%)",
        filter: "blur(80px)",
      }}
    />

    {/* Section Header */}
    <div className="mb-20">
      <p className="section-label">03. Capabilities</p>
      <h2 className="section-title">Tech Stack</h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#b900ff] to-[#00f0ff]" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillGroups.map((group) => (
        <SkillCard key={group.category} group={group} />
      ))}
    </div>
  </section>
);

export default Skills;
