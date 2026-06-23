import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cyber: ["Orbitron", "sans-serif"],
        "mono-cyber": ["Share Tech Mono", "monospace"],
      },
      colors: {
        "neon-cyan": "#00f0ff",
        "neon-purple": "#b900ff",
        "neon-green": "#00ff88",
        "neon-pink": "#ff006e",
        "cyber-bg": "#020817",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid":
          "linear-gradient(rgba(0,240,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.04) 1px, transparent 1px)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "float": "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "blink": "blink-cursor 1s step-end infinite",
        "slide-up": "slide-up 0.7s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0,240,255,0.4)" },
          "50%": { boxShadow: "0 0 30px rgba(0,240,255,0.8), 0 0 60px rgba(0,240,255,0.3)" },
        },
        "blink-cursor": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
