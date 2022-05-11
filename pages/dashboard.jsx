import Head from 'next/head';
import { gql } from 'graphql-request';

import graphQLClient from '../graphql-client';

import Layout from '../src/components/Layout';
import { Box, Divider, Typography } from '@mui/material';
import Project from '../src/components/Project';

export default function Home({ allProjects }) {
  console.log('All Projects', allProjects);
  const recentWork = allProjects.filter(project => project.recentWork);
  return (
    <>
      <Head>
        <title>Aimee Tacchi Portfolio 2022</title>
        <meta name="description" content="Aimee Tacchi Portfolio Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box sx={{ marginLeft: '89px' }}>
        <Typography mt={2} mb={2} variant="h2">Recent Work</Typography>
        <Divider />
        <Box mt={2} sx={{ display: 'flex', gap: 3, flexWrap: 'wrap'}}>
          {recentWork.map(project => (
            <Project key={project.id} project={project} />
          ))}
        </Box>
        </Box>
      </Layout>
    </>
  );
}

const query = gql`
    query {
        allProjects {
            id
            name
            slug
            description
            excerpt
            link
            tech
            recentWork
            coverImage {
                id
                responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
                    srcSet
                    webpSrcSet
                    sizes
                    src
                    width
                    height
                    aspectRatio
                    alt
                    title
                    base64
                }
            }
        }
    }
`;

export async function getServerSideProps() {

  const allProjects = await graphQLClient.request(query);

  return {
    props: allProjects,
  };
}
