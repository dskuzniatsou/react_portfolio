import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {S} from "./../Works_Styles.ts"
import React from "react";

type WorksPropsType = {
    title: string,
    description: string,
    src:   string,
    text:string,
}

export const Work:React.FC<WorksPropsType> = (props: WorksPropsType) => {
    return (
        <S.Work>
            <S.Image src={props.src} alt=""/>
            <S.Title>{props.title}</S.Title>
            <S.Description>{props.description}</S.Description>
            <S.Stack>Tech stack<span> : {props.text}</span> </S.Stack>
            <FlexWrapper  gap={'20px'} >
                <S.Link href={'#'}> <Icon iconId={'link-chain'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/> Preview</S.Link>
                <S.Link href={'#'}> <Icon iconId={'link-github'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>View Code</S.Link>
            </FlexWrapper>
        </S.Work>
    );
};

