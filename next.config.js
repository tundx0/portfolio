/** @type {import('next').NextConfig} */
module.exports = {
  images: {
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
  },
};


