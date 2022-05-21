import styled from 'styled-components'
import { Button } from "@mui/material";


export const ButtonTheme = styled(Button)`
    margin-top: 20px; 
    color: ${props => props.mode === 'dark' ? "white" : "white"};
    background-color: ${props => props.mode === 'dark' ? "#3D54BA" : "#273676"};

    &:hover {
        background-color: ${props => props.mode === 'dark' ? "#4F67D0" : "#384998"};
    }
`