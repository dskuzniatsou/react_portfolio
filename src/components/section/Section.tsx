

import {S}from "./Section_Styles.ts"
import React from "react";
type SectionPropsType = {
    title: string;
    description?: string;
}

export const Section: React.FC<SectionPropsType> = (props: SectionPropsType) => {
    return (
        <S.Section>
            <S.SectionTitle>{props.title}</S.SectionTitle>
            <S.SectionText> {props.description}</S.SectionText>
        </S.Section>
    );
};

