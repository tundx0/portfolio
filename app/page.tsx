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
    <main className="bg-paper min-h-screen">
      <Header />
      <Hero />
      <div className="hairline max-w-7xl mx-auto" />
      <About />
      <div className="hairline max-w-7xl mx-auto" />
      <Skills />
      <div className="hairline max-w-7xl mx-auto" />
      <Qualification />
      <div className="hairline max-w-7xl mx-auto" />
      <Portfolio />
      <div className="hairline max-w-7xl mx-auto" />
      <Contact />
      <Footer />
    </main>
  );
}
