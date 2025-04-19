import {Section} from "../../../components/section/Section.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/Work.tsx";
import portfolioImg1 from "../../../assets/images/portfolio-1.webp"
import portfolioImg2 from "../../../assets/images/portfolio-2.webp"
import portfolioImg3 from "../../../assets/images/portfolio-3.webp"
import portfolioImg4 from "../../../assets/images/portfolio-4.webp"
import portfolioImg5 from "../../../assets/images/portfolio-5.webp"
import portfolioImg6 from "../../../assets/images/portfolio-6.webp"
import {Container} from "../../../components/Container.ts";
import React from "react";
import {S} from "./Works_Styles.ts"

const workData = [
    {
        title:'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src:portfolioImg1,
        text:'HTML , JavaScript, SASS, React',
    },
    {
        title:'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src:portfolioImg2,
        text:'HTML , JavaScript, SASS, React',
    },
    {
        title:'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src:portfolioImg3,
        text:'HTML , JavaScript, SASS, React',
    },
    {
        title:'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src:portfolioImg4,
        text:'HTML , JavaScript, SASS, React',
    },
    {
        title:'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src:portfolioImg5,
        text:'HTML , JavaScript, SASS, React',
    },
    {
        title:'Project Tile goes here',
        description:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        src:portfolioImg6,
        text:'HTML , JavaScript, SASS, React',
    }
]
export const Works:React.FC = () => {
    return (
        <S.Works>
            <Container>
                <Section title={'Projects'} description={'Things I’ve built so far'} ></Section>
                <FlexWrapper  gap={'50px'}>
                    {workData.map ((w, index) => {
                        return (
                        <Work title={w.title} key={index}
                              description={w.description}
                              src={w.src}
                              text={w.text}/>
                        )
                    })}
                    {/*<Work title={'Project Tile goes here'}*/}
                    {/*      description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}*/}
                    {/*      src={portfolioImg1}*/}
                    {/*      text={'HTML , JavaScript, SASS, React'}/>*/}
                    {/*<Work title={'Project Tile goes here'}*/}
                    {/*      description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}*/}
                    {/*      src={portfolioImg2}*/}
                    {/*      text={'HTML , JavaScript, SASS, React'}/>*/}
                    {/*<Work title={'Project Tile goes here'}*/}
                    {/*      description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}*/}
                    {/*      src={portfolioImg3}*/}
                    {/*      text={'HTML , JavaScript, SASS, React'}/>*/}
                    {/*<Work title={'Project Tile goes here'}*/}
                    {/*      description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}*/}
                    {/*      src={portfolioImg4}*/}
                    {/*      text={'HTML , JavaScript, SASS, React'}/>*/}
                    {/*<Work title={'Project Tile goes here'}*/}
                    {/*      description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}*/}
                    {/*      src={portfolioImg5}*/}
                    {/*      text={'HTML , JavaScript, SASS, React'}/>*/}
                    {/*<Work title={'Project Tile goes here'}*/}
                    {/*      description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}*/}
                    {/*      src={portfolioImg6}*/}
                    {/*      text={'HTML , JavaScript, SASS, React'}/>*/}
                </FlexWrapper>
            </Container>

        </S.Works>
    );
};

