import { useContext } from 'react';
import Head from 'next/head';

import { Box, Divider, Paper, Typography } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import Layout from '../src/components/Layout';

import { ColorModeContext } from './_app';
import { ButtonTheme } from './styles';

export default function Settings({mode}) {
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <Head>
        <title>Settings | Aimee Tacchi</title>
        <meta name="description" content="Aimee Tacchi a passionate self-taught Front-End Web Developer " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Paper sx={{height: '100vh'}}>
        <Box sx={{marginLeft: '89px' }}>
            <Typography mt={2} mb={2} variant="h2">Settings</Typography>
            <Divider/>
            <Typography mt={2} mb={2} variant="body1">Change your theme here</Typography>
            <ButtonTheme mode={mode} onClick={colorMode.toggleColorMode}>
              {mode === 'dark' ? (
              <>
                <LightModeIcon/>
                Light Mode
              </>
              ) : (
              <>
                <DarkModeIcon/>
                Dark Mode
              </>)}
            </ButtonTheme>

        </Box>
        </Paper>
      </Layout>
    </>
  );
}
