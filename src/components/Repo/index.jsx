import React from 'react';

import { CardActionArea, CardContent, Divider, Typography } from '@mui/material';
import { RepoCard } from './styles';

const Repo = ({ repo }) => {
    const { name, description, languages, createdAt, url, stargazerCount } = repo;
    return (
        <RepoCard>
            <CardActionArea>
                <CardContent>
                    <Typography className="repo__name" gutterBottom variant="h3" component="div">
                        {name}
                    </Typography>
                    <Typography mb={2} variant="body1" color="text.primary">
                        Description: {description}
                    </Typography>
                    <Divider/>
                    <Typography mt={2} mb={2} variant="body1" color="text.primary">
                        Created At: {createdAt}
                    </Typography>
                    <a href={url} className="repo__link" target="_blank" rel="noreferrer" >View Repo</a>
                </CardContent>
            </CardActionArea>
        </RepoCard>
    );
};
export default Repo;
