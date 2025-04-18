import React from 'react';
import styled from "styled-components";
import {thema} from "../../styles/Theme.ts";
import {font} from "../../styles/Common.ts";


export const Button = styled.button`
    border-radius: 4px;
    padding: 16px 48px;
    display: inline-block;
    background: ${thema.colors.buttonBg};
    
    font-weight: 600;
    font-size: 18px;
    @media ${thema.media.mobile} {
    padding: 16px 20px;
        
}
`

