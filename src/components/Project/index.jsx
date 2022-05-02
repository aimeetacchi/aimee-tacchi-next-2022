import React from 'react';
import { Image } from 'react-datocms';

import { Card, CardActionArea, CardContent, Divider, Typography } from '@mui/material';

const Project = ({ project }) => {
    const { name, description, tech, link, coverImage } = project;
    return (
        <Card sx={{ width: '30%' }}>
            <CardActionArea>
                <Image data={coverImage.responsiveImage} alt={coverImage.alt} />
                <CardContent>
                    <Typography  gutterBottom variant="h3" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        Description: {description}
                    </Typography>
                    <Divider/>
                    <Typography variant="body1" color="text.primary">
                        Tech: {tech}
                    </Typography>
                    <a href={link}>View Project</a>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
export default Project;
