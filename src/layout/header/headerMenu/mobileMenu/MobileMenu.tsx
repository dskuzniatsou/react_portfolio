

import {Menu} from "../menu/Menu.tsx";
import React, {useState} from "react";
import {S} from "./../HeaderMenu_Styles.ts"

export const MobileMenu: React.FC <{menuItems: Array<string>}> = (props:{menuItems: Array<string>}) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen);};
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen ={menuIsOpen} onClick= {onBurgerBtnClick}>
                 <span> </span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen ={menuIsOpen} onClick={ () => {setMenuIsOpen(false)} }>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>


        </S.MobileMenu>
    );
};



