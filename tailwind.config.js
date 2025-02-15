/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'shadow-header': '0px 5px 5px 0px rgba(15, 23, 42, 0.5)',
      }
    },
  },
  plugins: [],
}

