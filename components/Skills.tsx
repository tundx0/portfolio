import React from "react";

interface SkillGroup {
  category: string;
  jp: string;
  index: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    jp: "バックエンド",
    index: "01",
    skills: [
      "Node.js / Express",
      "PostgreSQL",
      "Drizzle ORM",
      "MongoDB",
      "REST APIs",
      "GraphQL",
      "Inngest Workflows",
      "Python",
      "Go",
    ],
  },
  {
    category: "Frontend",
    jp: "フロントエンド",
    index: "02",
    skills: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "HTML5 / CSS3",
      "TanStack Query",
    ],
  },
  {
    category: "DevOps & Tools",
    jp: "インフラ",
    index: "03",
    skills: [
      "Docker / Compose",
      "AWS",
      "CI/CD (GitHub Actions)",
      "Turborepo",
      "pnpm Workspaces",
      "Caddy (Reverse Proxy)",
      "Git",
      "Linux / VPS",
    ],
  },
  {
    category: "Blockchain / Web3",
    jp: "ブロックチェーン",
    index: "04",
    skills: [
      "Solidity",
      "Foundry / Forge",
      "EVM Smart Contracts",
      "ERC-20 / ERC-721",
      "HMAC Webhooks",
      "EIP-191 Signatures",
    ],
  },
];

const SkillCard: React.FC<{ group: SkillGroup }> = ({ group }) => (
  <div className="card p-8 space-y-6">
    {/* Category header */}
    <div className="flex items-baseline justify-between gap-3 pb-4 border-b border-[color:var(--line)]">
      <div>
        <h3 className="font-mincho text-lg font-semibold text-ink">
          {group.category}
        </h3>
        <p className="font-sans-jp text-xs text-ink-faint mt-0.5 tracking-[0.15em]">
          {group.jp}
        </p>
      </div>
      <span className="font-mincho text-sm text-ink-faint">{group.index}</span>
    </div>

    {/* Skills */}
    <div className="flex flex-wrap gap-2">
      {group.skills.map((skill) => (
        <span key={skill} className="skill-tag">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => (
  <section id="skills" className="relative py-28 md:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="mb-16 md:mb-24">
      <p className="section-label">
        Capabilities <span className="jp">技術</span>
      </p>
      <h2 className="section-title">Tech Stack</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillGroups.map((group) => (
        <SkillCard key={group.category} group={group} />
      ))}
    </div>
  </section>
);

export default Skills;
