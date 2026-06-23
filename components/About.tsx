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
    { label: "Web3 Projects", value: "5+" },
    { label: "GitHub Repos", value: "40+" },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="mb-20">
        <p className="section-label">02. About Me</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="mt-4 h-px w-24 bg-gradient-to-r from-[#00f0ff] to-[#b900ff]" />
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 border border-[rgba(0,240,255,0.1)] rounded-none clip-none"
              style={{
                clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))"
              }}
            />
            <div className="absolute -inset-8 border border-[rgba(185,0,255,0.06)] "
              style={{
                clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 32px 100%, 0 calc(100% - 32px))"
              }}
            />

            <div
              className="relative w-72 h-80 overflow-hidden"
              style={{
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                border: "1px solid rgba(0,240,255,0.3)",
              }}
            >
              <Image
                src="/ola_pic.png"
                alt="Olatunde Adegboyebo"
                fill
                className="object-cover"
              />
              {/* Cyan gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,240,255,0.12)] via-transparent to-[rgba(185,0,255,0.12)] pointer-events-none" />
            </div>

            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#00f0ff]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#b900ff]" />
          </div>
        </div>

        {/* Content Side */}
        <div className="space-y-6">
          <div className="space-y-4 text-[#7a9bbf] leading-relaxed">
            <p>
              I&apos;m a <span className="text-[#00f0ff] font-medium">Full Stack &amp; Blockchain Engineer</span> based
              in Lagos, Nigeria. I specialize in building production-grade Web3 payment infrastructure,
              EVM-based decentralized applications, and scalable backend systems.
            </p>
            <p>
              At <span className="text-white font-medium">Wellnite Inc.</span> (US), I architect
              and ship full-stack features across a complex telehealth platform. Outside of work, I build
              open-source projects like <span className="text-[#b900ff] font-medium">ChainPay</span> — a
              non-custodial Web3 payment gateway — and an AI-powered job search assistant.
            </p>
            <p>
              My toolkit spans <span className="text-[#00ff88]">TypeScript, Next.js, Node.js, Solidity,
              Foundry, PostgreSQL, Docker</span>, and cloud deployments on AWS & VPS infrastructure.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-number">{stat.value}</div>
                <p className="font-mono-cyber text-[11px] text-[#7a9bbf] tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Download CV */}
          <button
            onClick={handleDownloadClick}
            className="btn-cyber mt-2"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
