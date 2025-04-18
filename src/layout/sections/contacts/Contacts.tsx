import React from 'react';
import styled from "styled-components";
import {Section} from "../../../components/section/Section.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {thema} from "../../../styles/Theme.ts";


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <Section title={'Contact Me'} description={'If you are looking to hire a product designer, \n' +
                    'I’m currently available for freelance work'}></Section>
                <FlexWrapper justify={'center'} >
                    <Button type={'submit'} >
                        <ButtonLink>
                            <Icon iconId={'mail'} height={'20px'} width={'25px'} viewBox={'0 0 25 20'}/> kuzniatsouds@yandex.by
                        </ButtonLink>
                    </Button>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    @media ${thema.media.mobile}{
        padding-bottom: 50px;
    }
`

const ButtonLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
cursor: pointer;`

