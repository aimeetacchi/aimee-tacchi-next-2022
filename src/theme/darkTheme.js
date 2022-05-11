export const darkTheme = {
    palette: {
        primary: {
            light: '#6578cc',
            main: '#131f54',
            dark: '#19224c',
            contrastText: '#d8ddf2',
        },
        secondary: {
            light: '#726b77',
            main: '#4F4756',
            dark: '#37313c',
            contrastText: '#E5E5E5',
        },
        error: {
            main: '#FF0000'
        },

        background: {
            default: "#253473!important",
            // paper: "#324599",
        },
        components: {

            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: "black!important",
                    }
                }
            },

            // MuiPaper: {
            //     styleOverrides: {
            //         root: {
            //             backgroundColor: "#19224c",
            //         }
            //     },
            //     defaultProps: {
            //         elevation: 0
            //     }
            // },
        }
    },
    typography: {
        fontFamily: "'Lato', sans-serif",
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightBold: 700,
        lineHeight: 1.5,
        h1: {
            fontFamily: "'Source Code Pro', monospace",
            fontSize: 36,
        },
        h2: {
            fontFamily: "'Source Code Pro', monospace",
            fontSize: 24,
        },
        h3: {
            fontFamily: "'Source Code Pro', monospace",
            fontSize: 20,
        },
        h4: {
            fontFamily: "'Source Code Pro', monospace",
            fontSize: 18,
        },

        h5: {
            fontFamily: "'Source Code Pro', monospace",
            fontSize: 16,
        },
        h6: {
            fontFamily: "'Source Code Pro', monospace",
            fontSize: 14,
        },
        useNextVariants: true,
        body1: {
            fontFamily: "'Lato', sans-serif",
            fontWeight: 400,
            fontSize: 16,
        },
        body2: {
            fontFamily: "'Source Code Pro', monospace",
            fontWeight: 400,
            fontSize: 16,
        }
    }
}

