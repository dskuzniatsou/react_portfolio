import styled from "styled-components";
import {thema} from "../../../styles/Theme.ts";

const Contacts = styled.section`
    @media ${thema.media.mobile}{
        padding-bottom: 50px;
    }
`

const ButtonLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
cursor: pointer;`

export const S = {
    Contacts,
    ButtonLink,
}
