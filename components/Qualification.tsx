const Qualification = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Wellnite Inc.",
      location: "Remote — US",
      period: "Nov 2022 — Present",
      description:
        "Architect and ship full-stack features across a complex telehealth platform serving thousands of patients. Built backend services for real-time scheduling, provider dashboards, and third-party health API integrations.",
      tech: ["Node.js", "PostgreSQL", "Next.js", "AWS", "REST"],
    },
    {
      title: "Backend Developer Intern",
      company: "HNG Internship",
      location: "Remote — Nigeria",
      period: "Sept 2022 — Nov 2022",
      description:
        "Built RESTful APIs and collaborated in an agile team. Worked on authentication systems, database design, and API integration for production web applications.",
      tech: ["Node.js", "Express", "MongoDB", "REST API"],
    },
  ];

  const education = [
    {
      degree: "Computer Science",
      institution: "Self-Taught / Open Source",
      period: "2021 — Present",
      description:
        "OSSU Computer Science curriculum, system design, and continuous hands-on project building across backend, full stack, and DevOps domains.",
    },
  ];

  return (
    <section id="qualification" className="relative py-28 md:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16 md:mb-24">
        <p className="section-label">
          Journey <span className="jp">経歴</span>
        </p>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-20">
        {/* Work Experience */}
        <div>
          <h3 className="font-sans-jp text-xs font-medium text-ink-muted tracking-[0.25em] uppercase mb-12 flex items-center gap-3">
            <span className="w-6 h-px bg-accent" />
            Work Experience
          </h3>

          <div className="relative">
            {/* Vertical hairline */}
            <div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-[color:var(--line)]" />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-10">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full bg-accent" />

                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h4 className="font-mincho text-lg font-semibold text-ink">
                          {exp.title}
                        </h4>
                        <p className="text-accent text-sm mt-0.5">{exp.company}</p>
                      </div>
                      <span className="font-sans-jp text-xs text-ink-muted whitespace-nowrap pt-1">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-ink-soft text-sm leading-relaxed font-light">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="font-sans-jp text-[0.68rem] text-ink-muted px-2.5 py-0.5 border border-[color:var(--line)]"
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
          <h3 className="font-sans-jp text-xs font-medium text-ink-muted tracking-[0.25em] uppercase mb-12 flex items-center gap-3">
            <span className="w-6 h-px bg-accent" />
            Learning Path
          </h3>

          <div className="relative">
            <div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-[color:var(--line)]" />

            <div className="space-y-12">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full bg-accent" />
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h4 className="font-mincho text-lg font-semibold text-ink">
                          {edu.degree}
                        </h4>
                        <p className="text-accent text-sm mt-0.5">{edu.institution}</p>
                      </div>
                      <span className="font-sans-jp text-xs text-ink-muted">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-ink-soft text-sm leading-relaxed font-light">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Currently Building */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full border border-accent bg-paper" />
                <div className="space-y-2">
                  <h4 className="font-mincho text-lg font-semibold text-ink">
                    Currently Building
                  </h4>
                  <p className="text-ink-soft text-sm leading-relaxed font-light">
                    Backend infrastructure, developer tooling, and open-source
                    payment systems.
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
