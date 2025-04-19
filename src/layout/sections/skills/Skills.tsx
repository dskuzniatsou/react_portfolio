
import {Icon} from "../../../components/icon/Icon.tsx";
import {Section} from "../../../components/section/Section.tsx";
import {Container} from "../../../components/Container.ts";
import React from "react";
import {S} from "./Skills_Styles.ts"
const skillData = [
    {iconId:'html'},
    {iconId:'css'},
    {iconId:'js'},
    {iconId:'react'},
    {iconId:'typescript'},
    {iconId:'github'},
    {iconId:'vscode'},
    {iconId:'webstorm'},
    {iconId:'git'},
    {iconId:'sass'},
    {iconId:'bootstrap'},
    {iconId:'tailwind'},
]

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container >
                <Section title={'My Tech Stack'} description={' Technologies I’ve been working with recently'}></Section>

                    <S.IconsGrid>
                        {skillData.map ((s, index) => {
                            return (
                                <Icon iconId={s.iconId} key={index}/>
                            )
                            })}
                        {/*<Icon iconId={'html'}/>*/}
                        {/*<Icon iconId={'css'}/>*/}
                        {/*<Icon iconId={'js'}/>*/}
                        {/*<Icon iconId={'react'}  />*/}
                        {/*<Icon iconId={'typescript'}/>*/}
                        {/*<Icon iconId={'github'}  />*/}
                        {/*<Icon iconId={'vscode'}/>*/}
                        {/*<Icon iconId={'webstorm'}/>*/}
                        {/*<Icon iconId={'git'} />*/}
                        {/*<Icon iconId={'sass'}  />*/}
                        {/*<Icon iconId={'bootstrap'}  />*/}
                        {/*<Icon iconId={'tailwind'} />*/}
                    </S.IconsGrid>


            </Container>
        </S.Skills>
    );
};


