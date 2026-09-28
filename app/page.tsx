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
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="bg-paper min-h-screen">
      <Header />
      <Hero />
      <div className="hairline max-w-7xl mx-auto" />
      <Reveal>
        <About />
      </Reveal>
      <div className="hairline max-w-7xl mx-auto" />
      <Reveal>
        <Skills />
      </Reveal>
      <div className="hairline max-w-7xl mx-auto" />
      <Reveal>
        <Qualification />
      </Reveal>
      <div className="hairline max-w-7xl mx-auto" />
      <Reveal>
        <Portfolio />
      </Reveal>
      <div className="hairline max-w-7xl mx-auto" />
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </main>
  );
}
