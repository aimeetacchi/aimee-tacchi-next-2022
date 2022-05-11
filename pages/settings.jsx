import { useContext } from 'react';
import Head from 'next/head';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';

import Layout from '../src/components/Layout';
import { ColorModeContext } from './_app';

export default function Settings() {
  const theme = useTheme();
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
           
            <Button onClick={colorMode.toggleColorMode}> {theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}</Button>

        </Box>
        </Paper>
      </Layout>
    </>
  );
}
