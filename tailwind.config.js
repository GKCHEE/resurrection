/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emerald-justice': '#10B981',
        'gold-vibrant': '#F59E0B',
      },
      backgroundImage: {
        'sky-gradient': 'linear-gradient(to right, #e0f2fe, #bae6fd, #7dd3fc, #38bdf8)',
        'dark-gradient': 'linear-gradient(to bottom right, #0f172a, #1e293b, #334155)',
      }
    },
  },
  plugins: [],
}
