
import { indigo, lightBlue, grey } from '@mui/material/colors';

const getDesignTokens = (mode) => ({
  palette: {
    ...(mode === 'light' ? {
      // palette values for light mode
      primary: {
        main: '#208ec7',
      },
      divider: indigo[300],
      background: {
        default: grey[100],
        paper: grey[200],
      },
      text: {
        primary: grey[900],
        secondary: grey[800],
      },
    }
      : {
        // palette values for dark mode
        primary: {
          main: '#1a475e',
        },
        divider: '#1a475e',
        background: {
          default: '#208ec7',
          paper: '#208ec7',
        },
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      })
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

export default getDesignTokens;



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