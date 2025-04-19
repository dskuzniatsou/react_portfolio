import styled from "styled-components";
import {thema} from "../../styles/Theme.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {font} from "../../styles/Common.ts";

const Footer = styled.footer`
   background: ${thema.colors.primaryBg};
    padding-bottom: 45px;
    `
const FooterContent = styled(FlexWrapper)` 
        @media ${thema.media.mobile}  {
    justify-content: center;
    text-align: center;
    flex-direction: column-reverse;
    align-items: center;
    `
const Line = styled.div`
  height: 2px;
  background-color: ${thema.colors.stroke};
  margin: 0 -15px 45px -15px ;
   `



const SocialList = styled.ul`
display: flex;
    gap: 40px;
    align-items: center;
   

`
const SocialItem = styled.li`
    display: flex;
    align-items: center;`

const SocialLink = styled.a`
    &:hover {
        transform: translateY(-5px);
        color: ${thema.colors.linkActive};
    }
`

const Copyright = styled.small`
    line-height: 225%;
    ${font({weight: 600, Fmax: 16, Fmin: 12})}
`
export const S = {
    Footer,
    FooterContent,
    Line,
    SocialList,
    SocialLink,
    Copyright,
    SocialItem
}