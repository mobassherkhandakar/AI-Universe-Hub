/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ea0927",

          secondary: "#df8de0",

          accent: "#13368e",

          neutral: "#1D1924",

          "base-100": "#fff",

          info: "#81BDEF",

          success: "#1C7D5B",

          warning: "#E6870A",

          error: "#E7736F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
