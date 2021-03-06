/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": { transform: "scale(0%)", opacity: 0 },
          "100%": { transform: "scale(90%)", opacity: 1 },
        },
        grow: {
          "0%": { transform: "scale(90%)" },
          "50%": { transform: "scale(110%)" },
          "100%": { transform: "scale(90%)" },
        },
      },
    },
  },
  plugins: [],
};
