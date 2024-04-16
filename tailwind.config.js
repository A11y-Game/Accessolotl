import Typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "app.vue",
    "pages/**/*.vue",
    "components/**/*.vue",
    "layouts/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        "t-dark": "#f4f7fb",
        "t-light": "#1f2937",
        "bg-dark": "#23335c",
        "bg-light": "#f4f7fb",
        primary: "#3F6EC4",
        secondary: "#334e9a",
        accent: "#c0216b",
        axolotl: "#FEC2DE",
        "forward-disabled-dark": "#D9D9D9",
        "forward-dark": "#52C440",
        "restart-dark": "#3A5FB1",
        "hint-dark": "#C0216B",
        "codebox-dark": "#3A5FB1",
        "levelbar-dark": "#273C6E",
        "result-inner-box-dark": "#335195",
        "result-dark": "#283B6F",
        "theorie-dark": "#293E74",
        "praxis-dark": "#406EC4",
        "headline-dark": "#243560",
        "page-background-dark": "#23335c",
        "stroke-dark": "#334E99",
        "forward-disabled-light": "#D9D9D9",
        "forward-light": "#52C440",
        "restart-light": "#C1CEE7",
        "hint-light": "#FEC2DE",
        "codebox-light": "#C1CEE7",
        "levelbar-light": "#CDD6E8",
        "result-inner-box-light": "#BEC9E0",
        "result-light": "#CDD6E8",
        "theorie-light": "#E1E7F1",
        "praxis-light": "#D0DCF0",
        "headline-light": "#E1E7F1",
        "page-background-light": "#F4F7FB",
        "stroke-light": "#334E99",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        mono: ["Source Code Pro", "monospace"],
        heading: ["Montserrat Alternates", "sans-serif"],
  },
    
    },
  },
  plugins: [Typography()],
};
