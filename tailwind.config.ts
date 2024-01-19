import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    font: {},
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey: "#808080",
        lightgry: "#f0f0f0",
        hitchmed: "#C43F41",
        "dark-hitchmed": "#C43F41",
        ntsgreen: "#08A045",
        "dark-ntsgreen": "#6DFE82",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        goRight: {
          from: { transform: "translateX(15%)" },
          to: { transform: "translateX(0%)" },
        },
        goLeft: {
          from: { transform: "translateX(-15%)" },
          to: { transform: "translateX(0%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 500ms",
        fadeOut: "fadeOut 500ms",
        goRight: "goRight 500ms",
        goLeft: "goLeft 500ms",
      },
    },
  },
  darkMode: ["class"],
  plugins: [],
};
export default config;
