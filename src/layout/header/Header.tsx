
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {thema} from "../../styles/Theme.ts";
import {MobileMenu} from "../../components/mobileMenu/MobileMenu.tsx";

const items = ["Home","Tech Stack","Projects","Contact"]

export const Header = () => {
    return (
        <StyledHeader>
           <Container>
               <FlexWrapper justify="space-between" align="center" >
                   <Logo/>
                   <Menu menuItems={items}/>
                   <MobileMenu menuItems={items}/>
               </FlexWrapper>
           </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background: ${thema.colors.secondaryBg} ;
    padding: 20px 0;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: ${thema.colors.descriptionColor};
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`