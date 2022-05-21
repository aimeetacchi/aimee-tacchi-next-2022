import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import getDesignTokens from '../src/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [mode, setMode] = useState('light');
  const [checked, setChecked] = useState(false)

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setChecked((prevChecked) => (prevChecked === false ? true : false));
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        // Dark mode will only be in local storage if Checked is True, if there is darkmode set then Remove it.
        localStorage.getItem('darkMode') && localStorage.removeItem('darkMode')
      },
    }),
    [],
  );

  const theme = useMemo(
    () => createTheme(getDesignTokens(mode)), [mode]
  );

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode')

    if (darkMode) {
      setChecked(true)
      setMode('dark');
    }

    if (checked) {
      localStorage.setItem('darkMode', JSON.stringify(checked))
      setMode('dark');
    } else {
      localStorage.removeItem('darkMode')
      setMode('light');
    }
  }, [mode, checked])


  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component mode={mode} colorMode={colorMode} {...pageProps} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};