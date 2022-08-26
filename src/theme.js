import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        background: {
            default: "#edf2f8"
        },
        primary: {
            main: "#edf2f8"
        },
        secondary: {
            main: "#313bac"
        },
        white: "#ffffff",
        grey: {
            dark: "#030303",
            light: "#e4e4e4",
            main: "#6b7688"
        },
        pink: "#fddde6",
        darkShadow:"-1px -2px 12px -3px rgba(0,0,0,1)"
    },
    typography: {
        fontFamily: `'Open Sans', sans-serif`,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 700
    }
})