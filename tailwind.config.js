/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'gradient': 'linear-gradient(to right, #333, #555, #333)', // Define your gradient colors here
      },
    },
  },
  plugins: [],
}

