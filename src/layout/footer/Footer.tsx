import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.ts";
import {thema} from "../../styles/Theme.ts";
import {font} from "../../styles/Common.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container >
                <Line/>
                <FooterContent justify="space-between" wrap={'wrap-reverse'} gap={'20px'}>
                    <Copyright>Made by <SocialLink> Dmitry Kuznetsov</SocialLink> — Copyright 2025</Copyright>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'viber-black'} height={'22px'} width={'22px'} viewBox={'0 0 22 22'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'email-black'} height={'22px'} width={'22px'} viewBox={'0 0 22 22'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'linkedin-black'} height={'25px'} width={'25px'} viewBox={'0 0 30 30'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'github-black'} height={'25px'} width={'25px'} viewBox={'0 0 30 30'}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </FooterContent>
                {/*<FlexWrapper justify="space-between" wrap={'wrap-reverse'} gap={'20px'}>*/}
                {/*   */}
                {/*</FlexWrapper>*/}
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
   background: ${thema.colors.primaryBg};
    padding-bottom: 45px;
    `
    const FooterContent = styled(FlexWrapper)` 
        @media ${thema.media.mobile}  {
    justify-content: center;
    text-align: center;
    flex-direction: column-reverse;
    align-items: center;
    `
const Line = styled.div`
  height: 2px;
  background-color: ${thema.colors.stroke};
  margin: 0 -15px 45px -15px ;
   `



const SocialList = styled.ul`
display: flex;
    gap: 40px;
    align-items: center;
   

`
const SocialItem = styled.li`
    display: flex;
    align-items: center;`

const SocialLink = styled.a`
    ;
`

const Copyright = styled.small`
    //font-weight: 600;
    //font-size: 16px;
    line-height: 225%;
    ${font({weight: 600, Fmax: 16, Fmin: 12})}
   

`
