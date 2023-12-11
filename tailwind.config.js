/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          base : "hsl(203, 89%, 53%)",
          dark :"hsl(203, 89%, 46%)",
          light : "hsl(203, 89%, 96%)"
        },
        primary:{
          base : "#657786",
          dark :"#AAB8C2",
          extraLight : "#E1E8ED",
          lightest  : "#F5F8FA"
        },
        black : "#14171A"
      }
    },
  },
  plugins: [],
}

