/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex:{
        '2':'2',
        '10':'10'
      },
      colors:{
        gray1:'rgba(208, 213, 221, 1)',
        gray2:'rgba(16, 24, 40, 0.05)',
        gray3:'rgba(228, 226, 230, 1)',
        primaryGreen:'rgba(18, 183, 106, 1)',
        lemonGreen:'rgba(154, 215, 126, 1)',
        blue:'rgba(24, 119, 242, 1)',
        transparentBg:'rgba(0, 0, 0, 0.3)',
        yellow:'rgba(255, 221, 103, 1)',
        navBlue:'rgba(41, 48, 86, 1)',
        goldYellow:'rgba(228, 206, 88, 1)'
      },
      backgroundColor:{
        gray1:'rgba(208, 213, 221, 1)',
        primaryGreen:'rgba(18, 183, 106, 1)',
        blue:'rgba(24, 119, 242, 1)',
        gray2:'rgba(16, 24, 40, 0.05)',
        yellow:'rgba(255, 221, 103, 1)',
        gray3:'rgba(228, 226, 230, 1)',
        navBlue:'rgba(41, 48, 86, 1)',
        goldYellow:'rgba(228, 206, 88, 1)'
      }
    },
  },
  plugins: [],
}