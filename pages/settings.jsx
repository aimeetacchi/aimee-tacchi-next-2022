import Head from 'next/head';

import Layout from '../src/components/Layout';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { darkTheme } from '../src/theme/darkTheme';
import lightTheme from '../src/theme';
import { createTheme } from '@mui/material/styles';

export default function Settings({setTheme, darkMode, setDarkMode}) {

  const setDarkTheme = () => {
    setTheme(createTheme(darkTheme))
    setDarkMode(true);
  }

  const setLightTheme = () => {
    setTheme(lightTheme)
    setDarkMode(false);
  }

  return (
    <>
      <Head>
        <title>Settings | Aimee Tacchi</title>
        <meta name="description" content="Aimee Tacchi a passionate self-taught Front-End Web Developer " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Paper>
        <Box sx={{marginLeft: '89px' }}>
            <Typography mb={2} variant="h2">Settings</Typography>
            <Divider/>
            {darkMode ? (
              <Button onClick={() => setLightTheme()}>Light Mode</Button>
            ) : (
            <Button onClick={() => setDarkTheme()}>Dark Mode</Button>
            )}
        </Box>
        </Paper>
      </Layout>
    </>
  );
}
