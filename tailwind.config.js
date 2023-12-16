/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./project/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",/* 500 */
        InterRegular: "Inter Regular",/* 400 */
        InterSemiBold: "Inter SemiBold",/* 600 */ 
        InterBold: "Inter Bold",/* 700 */
        SpaceGroteskMedium: "SpaceGrotesk Medium", /* 500 */

      },
      colors: {
        blue: "#377DFF",
        green: "#38CB89",
        orange: "#FFAB00",
        red: "#FF5630",
        primary1: "#000000",
        neutral01: "#FEFEFE",
        neutral02: "#F3F5F7",
        neutral03: "#E8ECEF",
        neutral04: "#6C7275",
        neutral05: "#343839",
        neutral06: "#232627",
        neutral07: "#141718",
      }
    },
  },
  plugins: [],
}

