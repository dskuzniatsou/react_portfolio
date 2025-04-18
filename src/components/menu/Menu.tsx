
import styled from "styled-components";
import {thema} from "../../styles/Theme.ts";

export const Menu = (props:{menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <MenuItems>
                {props.menuItems.map((item, index)  =>{
                    return <MenuList key={index}>
                        <MenuLink href=''>{item}</MenuLink>
                    </MenuList>
                })}

            </MenuItems>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    
@media ${thema.media.tablet} {
    display: none;
}

`
const MenuItems = styled.ul`
    display: flex;
    gap: 55px;`

const MenuList = styled.li``
const MenuLink = styled.a`
`