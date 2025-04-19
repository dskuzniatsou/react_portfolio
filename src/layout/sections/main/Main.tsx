import photo from "../../../assets/images/IAM.webp";
import {Container} from "../../../components/Container.ts";
import React from "react";
import {S} from './Main_Styles.ts';
import Typewriter from 'typewriter-effect';

export const Main : React.FC = () => {
    return (
        <S.Main>
            <Container>
                <S.MainFlexWrapper justify="space-between" wrap={'wrap-reverse'}  >
                    <div>
                        <S.SmallText>Hi There, my name is </S.SmallText>
                        <S.Name>Dmitry Kuznetsov</S.Name>
                        <S.MainTitle><p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <S.Photo src={photo} alt=""/>

                </S.MainFlexWrapper>
            </Container>

        </S.Main>
    );
};

