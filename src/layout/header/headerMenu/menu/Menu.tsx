import React from 'react';
import {S} from './../HeaderMenu_Styles.ts'

export const Menu: React.FC <{menuItems: Array<string>}> = (props:{menuItems: Array<string>}) => {
    return (
        <ul>
            {props.menuItems.map((item, index)  =>{
                return <S.MenuList key={index}>
                    <S.MenuLink href=''>{item}</S.MenuLink>
                </S.MenuList>
            })}

        </ul>
    );
};

