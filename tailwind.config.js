/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'svg-background': "url('src\assets\bg.svg')",
      },
      fontFamily: {
        manrope: ['Manrope', 'sans'], // 'sans' is the generic font family
      },
    },
  },
  plugins: [],
}