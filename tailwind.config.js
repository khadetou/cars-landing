module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-app": "#F9D806",
        "yellow-app-light": "#Ffee80",
        "black-app": "#130f40",
        "light-app": "#666",
        "border-color-app": "rgba(0, 0, 0, 0.1)",
      },
      boxShadow: {
        "box-shadow-app": "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
      },
      borderWidth: {
        "border-width-app": "0.1rem",
      },
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
      },
      screens: {
        laptop: "991px",
        tablet: "768px",
        mobile: "450px",
      },
    },
  },
  plugins: [],
};
