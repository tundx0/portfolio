/** @type {import('next').NextConfig} */
export const images = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "media.licdn.com",
      pathname: "**",
    },
    {
      protocol: "https",
      hostname: "files.fm",
      pathname: "**",
    },
  ],
};


