
import styled from "styled-components";
import {thema} from "../../styles/Theme.ts";



export const Button = styled.button`
    border-radius: 4px;
    padding: 16px 48px;
    display: inline-block;
    background: ${thema.colors.buttonBg};

    font-weight: 600;
    font-size: 18px;


    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgb(151, 150, 80);
    }

    @media ${thema.media.mobile} {
        padding: 16px 20px;

    }
`

