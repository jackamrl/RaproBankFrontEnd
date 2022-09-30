/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1080px",
      xl: "1280px",
      xl: "1536px",
    },
    extend: {
      display: ["group-focus"],
      colors: {
        greenLight: "#597a5c",
        greenLight2: "#7DA180",
        green: "#2e4e32",
        greenDark: "#06250b",
        blueBlack: "#061826",
        whiteGreen: "#D6EED7",
        black: "#323432",
        Nyanzo: "#E4FDE1",
        gray: "#9CAEA9",
        graygreen: "#EAEAEB",
        ashGray: "#CCDAD1",
        battleshipGray: "#788585",
        davisgray: "#7A7A7A",
        // brightRedSupLight: "hsl(12, 88%, 95%)",
        // darkBlue: "hsl(228 , 39%, 23%)",
        // darkGrayishBlue: "hsl(227 , 12%, 61%)",
        // veryDarkBlue: "hsl(233 , 12%, 13%)",
        // veryPaleRed: "hsl(13 , 100%, 96%)",
        // veryLightGray: "hsl(0 , 0%, 98%)",
      },
      fontFamily: {
        body: "Inter",
      },
      // fontFamily: {
      //   sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
};
