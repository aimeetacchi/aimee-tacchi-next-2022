import Head from 'next/head';

import Layout from '../src/components/Layout';
import { Paper, Box, Divider, Typography } from '@mui/material';

export default function About() {

  return (
    <>
      <Head>
        <title>About | Aimee Tacchi</title>
        <meta name="description" content="Aimee Tacchi a passionate self-taught Front-End Web Developer " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Paper sx={{height: '100vh'}}>
          <Box sx={{marginLeft: '89px' }}>
              <Typography mt={2} mb={2} variant="h2">About Aimee</Typography>
              <Divider/>
              <Typography  mt={2} paragraph={true} variant="body1">I am passionate self-taught Front-End Web Developer and crazy cat girl, From Dunstable. I focus primarily on writing clean, elegant and efficient code.</Typography>

              <Typography paragraph={true} variant="body1">I have skills in HTML, CSS, SCSS, JavaScript, React &amp; Gatsby.</Typography>

              <Typography paragraph={true} variant="body1">My Hobbies, include travelling, photography, painting, coding, swimming, video games &amp; playing board games.</Typography>
          </Box>
        </Paper>
      </Layout>
    </>
  );
}
