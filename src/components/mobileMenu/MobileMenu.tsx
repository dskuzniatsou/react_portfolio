
import styled, {css} from "styled-components";
import {thema} from "../../styles/Theme.ts";

export const MobileMenu = (props:{menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen ={true}>
                 <span> </span>
            </BurgerButton>
            <MobileMenuPopup isOpen ={true}>
                <ul>
                    {props.menuItems.map((item, index)  =>{
                        return <MenuList key={index}>
                            <MenuLink href=''>{item}</MenuLink>
                        </MenuList>
                    })}

                </ul>
            </MobileMenuPopup>


        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;
@media ${thema.media.tablet} {
    display: block;
}
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: 28px;
    right: 15px;
    width: 30px;
    height: 30px;
     z-index: 999999;
    
    span{
        display: block;
        width: 20px;
        height: 2px;
        background-color: ${thema.colors.linkColor};
        position: absolute;
       
         ${props =>props.isOpen && css<{isOpen: boolean}>`
             background-color: rgba(255, 255, 255, 0);
         `}
        
        &:before{
            content: '';
            display: block;
            width: 20px;
            height: 2px;
            background-color: ${thema.colors.linkColor};
            position: absolute;
            transform: translateY(-10px);
             ${props =>props.isOpen && css<{isOpen: boolean}>`
             transform: rotate(-45deg) translateY(0);
         `}
        }
        
        &:after{
            content: '';
            display: block;
            width: 20px;
            height: 2px;
            background-color: ${thema.colors.linkColor};
            position: absolute;
            transform: translateY(10px);
            ${props =>props.isOpen && css<{isOpen: boolean}>`
             transform: rotate(45deg) translateY(0);
         `}
        }
        }
    }
    
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;
    
    ${props => props.isOpen && css<{ isOpen: boolean }>`{
        display: flex;
        justify-content: center;
        align-items: center;
    }`}
    
    ul {
        display: flex;
        gap: 50px;
        justify-content: center;
        align-items: center; ;
        flex-direction: column;
        height: 100vh;
    }
`


const MenuList = styled.li``
const MenuLink = styled.a`
`