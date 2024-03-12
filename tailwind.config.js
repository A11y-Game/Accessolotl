/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'app.vue',
    'pages/**/*.vue',
    'components/**/*.vue',
    'layouts/**/*.vue',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      textDark: '#f4f7fb',
      textLight: '#1f2937',
      bgDark: "#23335c",
      bgLight: "#f4f7fb",
      primary: '#3F6EC4',
      secondary: "#334e9a",
      accent: "#c0216b"
    },
    extend: {},
  },
  plugins: [],
}

