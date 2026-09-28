"use client";

import CountUp from "@/components/ui/CountUp";

const About = () => {
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1gk5T1Y6-K999oql3j8XbKms9f2AJ1XjJ";
    link.download = "olatunde-adegboyebo-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Shipped", value: "10+" },
    { label: "APIs Built", value: "20+" },
    { label: "GitHub Repos", value: "40+" },
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16 md:mb-24">
        <p className="section-label">
          About <span className="jp">私について</span>
        </p>
        <h2 className="section-title">Who I Am</h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
        {/* Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-5 text-ink-soft leading-relaxed font-light">
            <p>
              I&apos;m a{" "}
              <span className="text-ink font-medium">Full Stack &amp; Backend Engineer</span>{" "}
              based in Lagos, Nigeria. I specialize in building reliable,
              production-grade backend systems — well-designed APIs, robust data
              models, and scalable service architectures.
            </p>
            <p>
              At <span className="text-ink font-medium">Wellnite Inc.</span> (US),
              I architect and ship full-stack features across a complex telehealth
              platform — real-time scheduling, provider dashboards, and third-party
              health API integrations. I care about clean code, thoughtful system
              design, and things that quietly keep working.
            </p>
            <p>
              My toolkit spans{" "}
              <span className="text-ink font-medium">
                TypeScript, Node.js, PostgreSQL, Docker
              </span>
              , and cloud deployments on AWS &amp; VPS infrastructure — with
              Solidity and EVM smart contracts as a side interest.
            </p>
          </div>

          {/* Download CV */}
          <button onClick={handleDownloadClick} className="btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </button>
        </div>

        {/* Stats — right column */}
        <div className="relative lg:col-span-5 lg:pl-12 lg:border-l lg:border-[color:var(--line)]">
          {/* Decorative kanji accent — 私 ("I / myself") */}
          <span
            className="hidden md:block absolute -top-10 right-0 font-mincho text-ink-faint/15 text-[12rem] leading-none select-none pointer-events-none"
            aria-hidden="true"
          >
            私
          </span>

          <div className="relative grid grid-cols-2 border-t border-l border-[color:var(--line)]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 md:p-8 border-r border-b border-[color:var(--line)]"
              >
                <div className="font-mincho text-4xl md:text-5xl font-semibold text-ink">
                  <CountUp value={stat.value} />
                </div>
                <p className="font-sans-jp text-[0.68rem] text-ink-muted tracking-[0.2em] uppercase mt-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
