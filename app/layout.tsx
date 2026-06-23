import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olatunde Adegboyebo — Full Stack & Blockchain Engineer",
  description:
    "Full Stack & Blockchain Engineer specializing in Web3, EVM smart contracts, decentralized payment systems, and scalable backend architectures. Based in Lagos, Nigeria.",
  keywords: ["Full Stack Developer", "Blockchain Engineer", "Web3", "Solidity", "Next.js", "TypeScript"],
  openGraph: {
    title: "Olatunde Adegboyebo — Full Stack & Blockchain Engineer",
    description: "Building the decentralized future, one block at a time.",
    type: "website",
    url: "https://olaportfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Scanline overlay for cyberpunk effect */}
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
