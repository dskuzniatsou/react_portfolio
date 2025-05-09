import styled from "styled-components";


type FlexWrapperPropsType= {
    direction?: string;
    justify?: string;
    align?: string;
    wrap?: string;
    gap?: string;
}

export const FlexWrapper  = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'center'};
    flex-wrap: ${props => props.wrap || 'wrap'};
    gap: ${props => props.gap || '0px'};
    height: 100%;

   
`