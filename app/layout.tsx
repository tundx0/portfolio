import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olatunde Adegboyebo — Full Stack & Backend Engineer",
  description:
    "Full Stack & Backend Engineer specializing in scalable APIs, distributed systems, databases, and cloud infrastructure with Node.js, TypeScript, PostgreSQL, and Docker. Based in Lagos, Nigeria.",
  keywords: ["Full Stack Developer", "Backend Engineer", "Node.js", "TypeScript", "PostgreSQL", "APIs", "System Design"],
  openGraph: {
    title: "Olatunde Adegboyebo — Full Stack & Backend Engineer",
    description: "Building reliable, scalable systems that ship to production.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
