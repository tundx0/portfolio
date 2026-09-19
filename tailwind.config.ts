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
        mincho: ["Shippori Mincho", "serif"],
        "sans-jp": ["Zen Kaku Gothic New", "sans-serif"],
      },
      colors: {
        paper: "#f6f4ef",
        "paper-2": "#efece4",
        "paper-3": "#e8e4da",
        ink: "#1c1a17",
        "ink-soft": "#45413b",
        "ink-muted": "#8a847a",
        "ink-faint": "#b6b0a4",
        accent: "#a8412a",
      },
      letterSpacing: {
        widest: "0.25em",
      },
      animation: {
        "fade-up": "fade-up 0.9s ease forwards",
        "fade-in": "fade-in 1.2s ease forwards",
        "float-soft": "float-soft 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
