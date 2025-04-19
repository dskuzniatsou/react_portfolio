import React from 'react';

import {Section} from "../../../components/section/Section.tsx";
import {Button} from "../../../components/button/Button.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

import {S} from "./Contacts_Styles.ts"

export const Contacts : React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <Section title={'Contact Me'} description={'If you are looking to hire a product designer, \n' +
                    'I’m currently available for freelance work'}></Section>
                <FlexWrapper justify={'center'} >
                    <Button type={'submit'} >
                        <S.ButtonLink>
                            <Icon iconId={'mail'} height={'20px'} width={'25px'} viewBox={'0 0 25 20'}/> kuzniatsouds@yandex.by
                        </S.ButtonLink>
                    </Button>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};


