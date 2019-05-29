import React from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#484848",
            main: "#212121",
            dark: "#000000",
            contrastText: "#ffffff"
        },
        secondary:{
            light:"#5dbcff",
            main: "#027cee",
            dark: "#0f4abd",
            contrastText: "#ffffff"
        },
        error: {
            light: red[500],
            main: red[700],
            dark: red[900],
            contrastText: "#ffffff",
        }
    },
    typography: {
        useNextVariants: true,
    }
})

const Theme = ({children}) => (
    <MuiThemeProvider theme={theme}>
        {children}
    </MuiThemeProvider>
)

export default Theme