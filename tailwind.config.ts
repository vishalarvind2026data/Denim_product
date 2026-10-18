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
        bg: {
          DEFAULT: "var(--color-bg)",
          soft: "var(--color-bg-soft)",
          dark: "#0D0D0E",
        },
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          light: "#F7F7F7",
        },
        line: {
          DEFAULT: "var(--color-line)",
          subtle: "#EBE8E4",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "#877344",
          light: "#B8A26E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Jost", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "Lora", "serif"],
      },
      letterSpacing: {
        widest: "0.22em",
        wider: "0.15em",
        wide: "0.1em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
