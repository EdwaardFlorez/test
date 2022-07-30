/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "3xl": "5px 5px 15px 5px #050F1C",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      width: {
        "2/7": "30%",
      },
    },
    colors: {
      black: "#071426",
      yellow: "#E8AA42"
    },
    fontFamily: { marvel: ["BestFriends", "BestFriends", "BestFriends"],subMarvel : ["Lemon", "Lemon", "Lemon"]},
  },
  plugins: [],
};
