/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontfamily: {
        Inter: ['Inter', 'sans-serif'],
      },
      colors: {
        Black: "hsl(0, 0%, 8%)",
        Ash: "hsl(0, 0%, 12%)",
        Grey: "hsl(0, 0%, 20%)",
        Green: " hsl(75, 94%, 57%)",
        White: "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}