/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#171717",
        secondary: "#474747",
        deep_blue: "#045c93",
        light_blue: "#ddf7ff",
        faint_blue: "#eef7fd",
      }
    },
  },
  plugins: [],
};

