import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Olatunde Adegboyebo — Full Stack & Backend Engineer",
    short_name: "Olatunde A.",
    description:
      "Portfolio of Olatunde Adegboyebo, a Full Stack & Backend Engineer building scalable APIs and systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f4ef",
    theme_color: "#f6f4ef",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
