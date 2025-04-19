import styled from "styled-components";
import {thema} from "../../styles/Theme.ts";

const Header = styled.header`
    background: ${thema.colors.secondaryBg} ;
    padding: 20px 0;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: ${thema.colors.descriptionColor};
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

export const S = {
    Header,
}