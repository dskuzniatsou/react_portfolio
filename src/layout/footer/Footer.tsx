import React from 'react';

import {Icon} from "../../components/icon/Icon.tsx";

import {Container} from "../../components/Container.ts";
import {S} from "./Footer_Styles.ts"

const socialItemsData = [
    {
        iconId:'viber-black',
        height:'22px',
        width:'22px',
        viewBox:'0 0 22 22',
    },

    {
        iconId:'email-black',
        height:'22px',
        width:'22px',
        viewBox:'0 0 22 22',
    },

    {
        iconId:'linkedin-black',
        height:'25px',
        width:'25px',
        viewBox:'0 0 30 30',
    },

    {
        iconId:'github-black',
        height:'25px',
        width:'25x',
        viewBox:'0 0 30 30',
    }
]
export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container >
                <S.Line/>
                <S.FooterContent justify="space-between" wrap={'wrap-reverse'} gap={'20px'}>
                    <S.Copyright>Made by <S.SocialLink> Dmitry Kuznetsov</S.SocialLink> — Copyright 2025</S.Copyright>
                    <S.SocialList>
                        {socialItemsData.map((s, index) => {
                            return (
                            <S.SocialItem>
                                <S.SocialLink>
                                    <Icon iconId={s.iconId} key={index} height={s.height} width={s.width} viewBox={s.viewBox} />
                                </S.SocialLink>
                            </S.SocialItem>
                            )
                        })}
                    </S.SocialList>
                </S.FooterContent>
            </Container>
        </S.Footer>
    );
};


