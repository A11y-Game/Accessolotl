import Typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "app.vue",
    "pages/**/*.vue",
    "components/**/*.vue",
    "layouts/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        "text-dark": "#F5F5F5",
        "text-light": "#1F2937",
        "blue-1-dark": "#23335C",
        "blue-1-light": "#F4F7FB",
        "blue-2-dark": "#273C6E",
        "blue-2-light": "#CDD6E8",
        "blue-3-dark": "#29447F",
        "blue-3-light": "#E1E7F1",
        "blue-4": "#334E99",
        "blue-5-dark": "#406EC4",
        "blue-5-light": "#D0DCF0",
        "axolotl-dark": "#C0216B",
        "axolotl-light": "#FEC2DE",
        "button-disabled": "#DCDCDC",
        "button-active": "#52C440",
        "hint-highlight-dark": "rgba(254, 194, 222, 0.15)",
        "hint-highlight-light": "rgba(192, 33, 107, 0.15)",
        "input-correct-highlight": "rgba(82, 196, 64, 0.15)",
      },
      boxShadow: {
        "content-box-drop-shadow": "0px 8px 8px rgba(0, 0, 0, 0.25)",
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
