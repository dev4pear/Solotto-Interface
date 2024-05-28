/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9150F8',
        secondary: '#535559',
        background: '#0B070E',
        gray: '#464444',
        pane: "#232323",
      },
      fontFamily: {
        'jua': ['Jua', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      filter: {
        'drop-shadow-box': 'drop-shadow(0px 4px 26px rgba(255, 255, 255, 0.25))',
      },
    },
  },
  plugins: [],
}

