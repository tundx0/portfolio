const Qualification = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Wellnite Inc.",
      location: "Remote — US",
      period: "Nov 2022 — Present",
      description:
        "Architect and ship full-stack features across a complex telehealth platform serving thousands of patients. Built real-time scheduling, provider dashboards, and integrated third-party health APIs.",
      tech: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
      accent: "#00f0ff",
    },
    {
      title: "Backend Developer Intern",
      company: "HNG Internship",
      location: "Remote — Nigeria",
      period: "Sept 2022 — Nov 2022",
      description:
        "Built RESTful APIs and collaborated in an agile team environment. Worked on authentication systems, database design, and API integration for production web applications.",
      tech: ["Node.js", "Express", "MongoDB", "REST API"],
      accent: "#b900ff",
    },
  ];

  const education = [
    {
      degree: "Computer Science",
      institution: "Self-Taught / Open Source",
      period: "2021 — Present",
      description:
        "OSSU Computer Science curriculum, system design, and continuous hands-on project building across full stack, DevOps, and blockchain domains.",
      accent: "#00ff88",
    },
  ];

  return (
    <section
      id="qualification"
      className="relative py-32 px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Section Header */}
      <div className="mb-20">
        <p className="section-label">04. Journey</p>
        <h2 className="section-title">Experience</h2>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#00f0ff] to-[#00ff88]" />
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Work Experience */}
        <div>
          <h3 className="font-cyber text-base font-bold text-[#00f0ff] tracking-widest uppercase mb-10 flex items-center gap-3">
            <span className="w-4 h-px bg-[#00f0ff]" />
            Work Experience
          </h3>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f0ff] via-[#b900ff] to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-12">
                  {/* Dot */}
                  <div
                    className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: exp.accent, background: "var(--cyber-bg)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: exp.accent, boxShadow: `0 0 8px ${exp.accent}` }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="cyber-glass p-5 space-y-3"
                    style={{ borderColor: `${exp.accent}22` }}
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h4 className="font-cyber text-sm font-bold text-white">{exp.title}</h4>
                        <p style={{ color: exp.accent }} className="font-mono-cyber text-xs mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <span className="font-mono-cyber text-[10px] text-[#3d5a7a] whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-[#7a9bbf] text-sm leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono-cyber text-[10px] px-2 py-0.5 rounded"
                          style={{
                            background: `${exp.accent}11`,
                            border: `1px solid ${exp.accent}33`,
                            color: exp.accent,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="font-cyber text-base font-bold text-[#b900ff] tracking-widest uppercase mb-10 flex items-center gap-3">
            <span className="w-4 h-px bg-[#b900ff]" />
            Learning Path
          </h3>

          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-[#b900ff] via-[#00ff88] to-transparent" />

            <div className="space-y-10">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-12">
                  <div
                    className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                    style={{ borderColor: edu.accent, background: "var(--cyber-bg)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: edu.accent, boxShadow: `0 0 8px ${edu.accent}` }}
                    />
                  </div>
                  <div
                    className="cyber-glass p-5 space-y-3"
                    style={{ borderColor: `${edu.accent}22` }}
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h4 className="font-cyber text-sm font-bold text-white">{edu.degree}</h4>
                        <p style={{ color: edu.accent }} className="font-mono-cyber text-xs mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="font-mono-cyber text-[10px] text-[#3d5a7a]">{edu.period}</span>
                    </div>
                    <p className="text-[#7a9bbf] text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}

              {/* Currently Building note */}
              <div className="relative pl-12">
                <div
                  className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 border-[#00ff88] flex items-center justify-center animate-pulse"
                  style={{ background: "var(--cyber-bg)" }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#00ff88]" style={{ boxShadow: "0 0 8px #00ff88" }} />
                </div>
                <div className="cyber-glass p-5 border-[rgba(0,255,136,0.15)]">
                  <h4 className="font-cyber text-sm font-bold text-[#00ff88]">Currently Building</h4>
                  <p className="text-[#7a9bbf] text-sm mt-2">
                    Open-source Web3 payment infrastructure &amp; AI-powered developer tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
