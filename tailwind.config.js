/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#741906",
        secondary: "#12273d",
      },
      screens: {
        md: "835px",
      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
