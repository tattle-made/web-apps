import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.4,
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["400"],
    },
    {
      name: "Raleway",
      styles: ["300", "300i", "400", "400i"],
    },
  ],
  headerFontFamily: ["Montserrat", "serif"],
  bodyFontFamily: ["Raleway", "serif"],
  blockMarginBottom: 0.8
})
export default typography