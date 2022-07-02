import { Card } from '@mui/material';
import styled from "styled-components";

export const ProjectCard = styled(Card)`
    width: 90%;

    @media (min-width: 690px) {
        width: 47%;
    }

    @media (min-width: 840px) {
        width: 30%;
    }

    @media (min-width: 970px) {
        width: 23%;
    }

    button {
        height: 100%;
    }

    button > div {
        max-width: 100%!important;
    }
   img {
    width: 100%!important;
   }
`