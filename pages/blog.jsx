import Head from 'next/head';

import Layout from '../src/components/Layout';
import { Box, Divider, Paper, Typography } from '@mui/material';

export default function Blog() {

  return (
    <>
      <Head>
        <title>Blog | Aimee Tacchi</title>
        <meta name="description" content="Aimee Tacchi a passionate self-taught Front-End Web Developer " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Paper sx={{height: '100vh'}}>
          <Box sx={{marginLeft: '89px' }}>
              <Typography mt={2} mb={2} variant="h2">Blog</Typography>
              <Divider/>
              
          </Box>
        </Paper>
      </Layout>
    </>
  );
}
