import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0b0c0e",
        foreground: "#f7f5f0",
        gold: {
          50: "#fbf8f0",
          100: "#f6eedc",
          200: "#eddcb9",
          300: "#e0c38c",
          400: "#d4a95a",
          500: "#c5a059", // Primary antique gold
          600: "#b08544",
          700: "#8c6534",
          800: "#73512d",
          900: "#604328",
          DEFAULT: "#c5a059",
        },
        brass: {
          light: "#e2c582",
          DEFAULT: "#dfb76c",
          dark: "#a68239",
        },
        charcoal: {
          50: "#2a2c30",
          100: "#222428",
          200: "#1b1d20",
          300: "#16181b",
          400: "#121316",
          500: "#0e0f12",
          DEFAULT: "#141619",
        },
        walnut: {
          light: "#3a2d24",
          DEFAULT: "#251c17",
          dark: "#17120e",
        },
        travertine: {
          light: "#423d37",
          DEFAULT: "#2a2723",
          dark: "#1a1815",
        },
        cream: {
          100: "#ffffff",
          200: "#fbfaf7",
          300: "#f7f5f0",
          400: "#eae6df",
          500: "#d3cec3",
          DEFAULT: "#f7f5f0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        arabic: ["var(--font-arabic)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 160, 89, 0.25)',
        'gold-glow-lg': '0 0 45px -10px rgba(197, 160, 89, 0.35)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #dfb76c 0%, #c5a059 50%, #9a7b3c 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(12, 13, 14, 0.7) 0%, rgba(12, 13, 14, 0.95) 100%)',
        'radial-gold': 'radial-gradient(circle at 50% 0%, rgba(197, 160, 89, 0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
