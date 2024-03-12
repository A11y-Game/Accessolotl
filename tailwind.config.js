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
            },
        },
    },
    plugins: [],
};
