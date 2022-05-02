import Head from 'next/head';

import Layout from '../src/components/Layout';
import { Box, Divider, Typography } from '@mui/material';

export default function Skills() {

    return (
        <>
            <Head>
                <title>Skills | Aimee Tacchi</title>
                <meta name="description" content="Aimee Tacchi a passionate self-taught Front-End Web Developer " />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <Box sx={{ marginLeft: '89px' }}>
                    <Typography mb={2} variant="h2">Skills</Typography>
                    <Divider />
                    <Typography mt={2} variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis natus impedit quam praesentium officia vitae provident cum voluptas dicta maxime labore velit assumenda, fugiat corrupti eaque corporis officiis nam expedita?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis natus impedit quam praesentium officia vitae provident cum voluptas dicta maxime labore velit assumenda, fugiat corrupti eaque corporis officiis nam expedita?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis natus impedit quam praesentium officia vitae provident cum voluptas dicta maxime labore velit assumenda, fugiat corrupti eaque corporis officiis nam expedita?</Typography>

                    <Typography mt={2} variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis natus impedit quam praesentium officia vitae provident cum voluptas dicta maxime labore velit assumenda, fugiat corrupti eaque corporis officiis nam expedita?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis natus impedit quam praesentium officia vitae provident cum voluptas dicta maxime labore velit assumenda, fugiat corrupti eaque corporis officiis nam expedita?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis natus impedit quam praesentium officia vitae provident cum voluptas dicta maxime labore velit assumenda, fugiat corrupti eaque corporis officiis nam expedita?</Typography>

                    <Typography mt={2} variant="body1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis natus impedit quam praesentium officia vitae provident cum voluptas dicta maxime labore velit assumenda, fugiat corrupti eaque corporis officiis nam expedita?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis natus impedit quam praesentium officia vitae provident cum voluptas dicta maxime labore velit assumenda, fugiat corrupti eaque corporis officiis nam expedita?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis natus impedit quam praesentium officia vitae provident cum voluptas dicta maxime labore velit assumenda, fugiat corrupti eaque corporis officiis nam expedita?</Typography>
                </Box>
            </Layout>
        </>
    );
}
