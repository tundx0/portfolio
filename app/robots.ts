import type { MetadataRoute } from "next";

const SITE_URL = "https://olaportfolio.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // All standard search crawlers
        userAgent: "*",
        allow: "/",
      },
      {
        // AI answer engines & LLM crawlers — explicitly welcomed so this
        // site can be cited by ChatGPT, Claude, Perplexity, Gemini, etc.
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "Bytespider",
          "Amazonbot",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
