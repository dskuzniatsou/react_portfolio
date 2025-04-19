import {thema} from "../../styles/Theme.ts";
import styled from "styled-components";
import {font} from "../../styles/Common.ts";

const Section=styled.div`
 text-align: center;
`
const SectionTitle = styled.h2`
    ${font({weight: 700, Fmax: 48, Fmin: 36})}
    //font-size: 48px;
    //font-weight: 700;
    margin-bottom: 50px;
    @media ${thema.media.mobile} {
        margin-bottom: 30px;  
    }
`
const SectionText = styled.p`
    ${font({weight: 400, Fmax: 32, Fmin: 24})};
    margin-bottom: 80px;
    white-space: pre-line;
    @media ${thema.media.mobile} {
        margin-bottom: 50px;
    }`

export const S = {
    Section,
    SectionTitle,
    SectionText,
}