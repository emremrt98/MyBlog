/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "main-color": "#F76707",
      "secondary-color": "#FD7E14",
      "primary-text-color": "#343A40",
      "secondary-text-color": "#868E96",
      "border-color": "#CED4DA",
      "icon-color": "#CED4DA",
      "white": "#fff",
    },
    
  },
  plugins: [],
}
