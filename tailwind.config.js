/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sonup: "#417571",
        pink: "#f8c3c8d8",
        orange: "#FF7A30",
      },
      boxShadow: {
        nav: "rgba(50, 50, 105, 0.15) 0 2px 5px 0, rgba(0, 0, 0, 1) 0 1px 1px 0.5px",
        chat: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    },
  },
  plugins: [],
};
