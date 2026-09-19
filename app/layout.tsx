import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://olaa.dev";
const NAME = "Olatunde Adegboyebo";
const ROLE = "Full Stack & Backend Engineer";
const DESCRIPTION =
  "Olatunde Adegboyebo is a Full Stack & Backend Engineer specializing in scalable APIs, distributed systems, databases, and cloud infrastructure with Node.js, TypeScript, PostgreSQL, and Docker. Based in Lagos, Nigeria — working globally.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NAME} — ${ROLE}`,
    template: `%s — ${NAME}`,
  },
  description: DESCRIPTION,
  applicationName: `${NAME} Portfolio`,
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  publisher: NAME,
  keywords: [
    "Olatunde Adegboyebo",
    "Full Stack Engineer",
    "Backend Engineer",
    "Backend Developer Lagos",
    "Node.js Developer",
    "TypeScript Engineer",
    "PostgreSQL",
    "REST API Developer",
    "System Design",
    "Software Engineer Nigeria",
    "Docker",
    "AWS",
    "Next.js Developer",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Olatunde",
    lastName: "Adegboyebo",
    username: "tundx0",
    gender: "male",
    title: `${NAME} — ${ROLE}`,
    description: "Building reliable, scalable backend systems that ship to production.",
    url: SITE_URL,
    siteName: `${NAME} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} — ${ROLE}`,
    description: "Building reliable, scalable backend systems that ship to production.",
    creator: "@TundeAlex1",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: NAME,
      givenName: "Olatunde",
      familyName: "Adegboyebo",
      url: SITE_URL,
      image: `${SITE_URL}/ola_pic.png`,
      jobTitle: ROLE,
      description: DESCRIPTION,
      email: "mailto:tundx0@gmail.com",
      worksFor: {
        "@type": "Organization",
        name: "Wellnite Inc.",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      knowsAbout: [
        "Backend Engineering",
        "Full Stack Development",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "REST APIs",
        "GraphQL",
        "System Design",
        "Docker",
        "AWS",
        "Cloud Infrastructure",
        "Solidity",
        "Smart Contracts",
      ],
      sameAs: [
        "https://github.com/tundx0",
        "https://www.linkedin.com/in/olatunde-adegboyebo",
        "https://twitter.com/TundeAlex1",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${NAME} — Portfolio`,
      description: DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${NAME} — ${ROLE}`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
