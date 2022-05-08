import Head from 'next/head';

import Layout from '../src/components/Layout';
import { Box, Divider, Typography } from '@mui/material';

export default function Settings() {

  return (
    <>
      <Head>
        <title>Settings | Aimee Tacchi</title>
        <meta name="description" content="Aimee Tacchi a passionate self-taught Front-End Web Developer " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box sx={{marginLeft: '89px' }}>
            <Typography mb={2} variant="h2">Settings</Typography>
            <Divider/>
            
        </Box>
      </Layout>
    </>
  );
}
