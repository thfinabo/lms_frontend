/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray1:'rgba(208, 213, 221, 1)',
        gray2:'rgba(16, 24, 40, 0.05)',
        primaryGreen:'rgba(18, 183, 106, 1)',
        lemonGreen:'rgba(154, 215, 126, 1)',
        blue:'rgba(24, 119, 242, 1)',
        transparentBg:'rgba(0, 0, 0, 0.3)'
      },
      backgroundColor:{
        gray1:'rgba(208, 213, 221, 1)',
        primaryGreen:'rgba(18, 183, 106, 1)',
        blue:'rgba(24, 119, 242, 1)',
        gray2:'rgba(16, 24, 40, 0.05)',
      }
    },
  },
  plugins: [],
}