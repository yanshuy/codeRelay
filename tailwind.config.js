/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        xs2: "500px",
        sm: "640px",
        md: "768px",
        md2: "900px",
        lg: "1024px",
        lg2: "1100px",
        xl: "1280px",
        "2xl": "1536px",
      },
      containers: {
        xxs: "300px",
        xs: "400px",
        xs2: "500px",
        sm: "640px",
        md: "768px",
        md2: "900px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
  ],
};
