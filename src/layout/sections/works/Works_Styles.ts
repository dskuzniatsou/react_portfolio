import styled from "styled-components";
import {thema} from "../../../styles/Theme.ts";

const Works = styled.section`
`
const Work = styled.div`
    width: 370px;
    flex-grow: 1;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
    background: ${thema.colors.skillsBg};
    padding-bottom: 25px;
    color: ${thema.colors.titleColor}
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`
const Title = styled.h3`
    padding: 25px 30px 0 30px;
    font-weight: 500;
    font-size: 28px;
    line-height: 93%;
    `

const Description = styled.p`
    font-weight: 300;
    font-size: 18px;
    line-height: 144%;
    padding:15px 30px;
`
const Stack = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    padding: 0 30px 20px;
   
span{
    font-weight: 300;
    font-size: 14px;
}`
const Link = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 162%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${thema.colors.linkColor};
padding-left: 30px;
    &:hover {
        transform: translateY(-5px);
        color: ${thema.colors.linkActive};
    }`


export const S = {
    Works,
    Work,
    Image,
    Title,
    Description,
    Stack,
    Link,
}
