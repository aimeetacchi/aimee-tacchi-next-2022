import { createTheme } from '@mui/material/styles';
import { indigo, lightBlue } from '@mui/material/colors';
const lightTheme = createTheme({
  // breakpoints: {
  //   values: {
  //     xxs: 0, // small phone
  //     xs: 300, // phone
  //     sm: 600, // tablets
  //     md: 900, // small laptop
  //     lg: 1200, // desktop
  //     xl: 1536 // large screens
  //   }
  // },
  // colors: {
  //     navy: '#072a52;',
  //     darkblue: '#1a475e',
  //     blue: '#208ec7',
  //     purple: '#4956ba',
  //     lightpurple: '#9ba2ff',
  //     darkpurple: '#414073',
  //     black: '#0a1128',
  // },

  palette: {
    // mode: 'dark',
    primary: {
      light: '#6376c7',
      main: '#3D54BA',
      dark: '#2a3a82',
      contrastText: '#E5E5E5',
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
      default: "#b2bbe5",
      paper: "#fefefe",
    },
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
})

export default lightTheme;