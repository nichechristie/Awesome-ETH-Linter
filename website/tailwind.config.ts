import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eth: {
          blue: "#1c6ef2",
          purple: "#7b3fe4",
          dark: "#0a0e1a",
          card: "#111827",
          border: "#1e293b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
