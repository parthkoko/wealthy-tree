/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // ✅ Match all JS/JSX files inside src
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Dark blue
        secondary: "#F59E0B", // Amber
        accent: "#10B981", // Emerald
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
