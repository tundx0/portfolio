"use client";
import Image from "next/image";

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

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Image Side */}
        <div className="relative flex justify-center md:justify-start">
          <div className="relative">
            {/* Thin offset frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[color:var(--line)]" aria-hidden="true" />
            <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden border border-[color:var(--line)] bg-paper-2">
              <Image
                src="/ola_pic.png"
                alt="Olatunde Adegboyebo"
                fill
                className="object-cover grayscale-[15%]"
              />
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-6">
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

          {/* Stats */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-[color:var(--line)]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-mincho text-3xl font-semibold text-ink">
                  {stat.value}
                </div>
                <p className="font-sans-jp text-[0.68rem] text-ink-muted tracking-[0.2em] uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Download CV */}
          <button onClick={handleDownloadClick} className="btn mt-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
