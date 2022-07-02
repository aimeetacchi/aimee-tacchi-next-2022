import { Card } from '@mui/material';
import styled from "styled-components";

export const RepoCard = styled(Card)`
    width: 90%;
    background-color: #4f5ea1;

    @media (min-width: 690px) {
        width: 47%;
    }

    @media (min-width: 840px) {
        width: 30%;
    }

    @media (min-width: 970px) {
        width: 23%;
    }
    
    .repo {
        &__name {
            text-transform: uppercase;
        }
        &__link {
            margin-top: auto;
            color: white;
            display: block;
            padding: 10px 20px;
            border-radius: 20px;
            text-align: center;
            border: 1px solid white;
            text-decoration: none;
            text-transform: uppercase;
            &:hover {
                background-color: white;
                color: black;
            }
        }
    }

    button {
        height: 100%;
    }
    button > div {
        max-width: 100%!important;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
   img {
    width: 100%!important;
   }
`