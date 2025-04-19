import styled from "styled-components";
import {thema} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {font} from "../../../styles/Common.ts";

const Main=styled.section`
    display: flex;  
    padding-top: 150px;
    @media ${thema.media.mobile} {
        padding-top: 80px;
    }
`
const MainFlexWrapper = styled(FlexWrapper)`
  @media ${thema.media.tablet} {
      text-align: center;
      flex-direction: column-reverse;
      gap:20px;
  }
`;

const Photo=styled.img`
    width: 320px;
    height: 320px;
    object-fit: cover;
    border-radius: 100%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);    
    @media ${thema.media.tablet} {
        width: 240px;
        height: 240px;
        
    }
        
    }
`
const SmallText=styled.span` 
   
    ${font({weight: 700, Fmax: 32, Fmin: 24})};
   
`
const Name=styled.h2`
     ${font({weight: 700, Fmax: 48, Fmin: 36})};
    color: ${thema.colors.titleColor};
    margin: 10px 0;
`

const MainTitle=styled.h1`
    ${font({weight: 700, Fmax: 58, Fmin: 36})};
    p{
        display: none;
    }
    `

export const S = {
    Main,
    MainFlexWrapper,
    Photo,
    SmallText,
    Name,
    MainTitle,
}