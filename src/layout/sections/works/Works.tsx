import styled from "styled-components";
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

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <Section title={'Projects'} description={'Things I’ve built so far'} ></Section>
                <FlexWrapper  gap={'50px'}>
                    <Work title={'Project Tile goes here'}
                          description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={portfolioImg1}
                          text={'HTML , JavaScript, SASS, React'}/>
                    <Work title={'Project Tile goes here'}
                          description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={portfolioImg2}
                          text={'HTML , JavaScript, SASS, React'}/>
                    <Work title={'Project Tile goes here'}
                          description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={portfolioImg3}
                          text={'HTML , JavaScript, SASS, React'}/>
                    <Work title={'Project Tile goes here'}
                          description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={portfolioImg4}
                          text={'HTML , JavaScript, SASS, React'}/>
                    <Work title={'Project Tile goes here'}
                          description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={portfolioImg5}
                          text={'HTML , JavaScript, SASS, React'}/>
                    <Work title={'Project Tile goes here'}
                          description={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                          src={portfolioImg6}
                          text={'HTML , JavaScript, SASS, React'}/>
                </FlexWrapper>
            </Container>

        </StyledWorks>
    );
};

const StyledWorks = styled.section`
   
`