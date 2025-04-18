import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {thema} from "../../../../styles/Theme.ts";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";


type WorksPropsType = {
    title: string,
    description: string,
    src:   string,
    text:string,
}

export const Work = (props: WorksPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <Stack>Tech stack<span> : {props.text}</span> </Stack>
            <FlexWrapper  gap={'20px'} >
                <Link href={'#'}> <Icon iconId={'link-chain'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/> Preview</Link>
                <Link href={'#'}> <Icon iconId={'link-github'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>View Code</Link>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.div`
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
    //padding-left: 30px;
    //padding-bottom: 20px;
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
padding-left: 30px;`
