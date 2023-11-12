/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        mainB: '#009eff',
        mainY: '#ff9900',
        dark: '#111',
        light: '#fff',
      },
    },
  },
  plugins: [],
}

