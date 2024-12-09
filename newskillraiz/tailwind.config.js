module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        customTeal: "#38b2ac",
        lightTeal: "#d6f0f5",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Example of adding a custom font
      },
      boxShadow: {
        custom: "0 10px 30px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  
  plugins: [],
};

