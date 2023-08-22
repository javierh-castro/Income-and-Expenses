/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-red': '#e74c3c', // Agrega el color verde personalizado a tu paleta
      },
    },
  },
  plugins: [],
}

