import {
  Qualification,
  About,
  Contact,
  Header,
  Hero,
  Portfolio,
  Skills,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="bg-[#020817] min-h-screen">
      <Header />
      <Hero />
      {/* Neon divider */}
      <div className="neon-divider" />
      <About />
      <div className="neon-divider" />
      <Skills />
      <div className="neon-divider" />
      <Qualification />
      <div className="neon-divider" />
      <Portfolio />
      <div className="neon-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
