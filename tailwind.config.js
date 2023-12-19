/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primary-color":"#FFD910",
        "secondary-color":"#192330",
        "secondary-color_2":"#EE3432",
        "secondary-color_3":"#9CA4AB",
        "secondary-color_4":"#32B0E8",
        "secondary-color_5":"#FAFAFA",
      }
    },
  },
  plugins: [],
};
