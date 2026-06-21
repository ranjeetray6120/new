import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#ff4e00", // Vibrant orange/red accent
          dark: "#e04500",
          light: "#ff7133",
        },
        dark: {
          900: "#0b0c10",
          800: "#1f2833",
          700: "#2d3748",
        }
      },
    },
  },
  plugins: [],
};
export default config;
