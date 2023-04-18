import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: "YekanBakh",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontWeightHeavy: 800,
        fontWeightFat: 900
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 966,
          lg: 1200,
          xl: 1536,
        },
      },
    direction: "rtl"
});

export default theme;