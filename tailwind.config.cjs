import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1580px",
    },
    extend: {
      colors: {
        primary: "#131424",
        secondary: "#393A47",
        accent: "#F13024",
      },
      backgroundImage: {
        explosion: "url('/images/bg-explosion.png')",
        circles: "url('/images/bg-circles.png')",
        circleStar: "url('/images/circle-star.svg')",
        site: "url('/images/site-bg.svg')",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      fontFamily: {
        sora: ["var(--font-sora)", ...fontFamily.sans],
      },
      spacing: {
        92: "23.125rem",
        96: "30rem",
        120: "120%",
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
