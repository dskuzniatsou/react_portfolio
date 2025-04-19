
import {Logo} from "../../components/logo/Logo.tsx";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import React from "react";
import {S} from "./Header_Styles.ts"

const items = ["Home","Tech Stack","Projects","Contact"]

export const Header : React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect( () => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);

    },[])

    return (
        <S.Header>
           <Container>
               <FlexWrapper justify="space-between" >
                   <Logo/>
                   {width < breakpoint ? <MobileMenu menuItems={items}/>
                                       :  <DesktopMenu menuItems={items}/>}
               </FlexWrapper>
           </Container>
        </S.Header>
    );
};

