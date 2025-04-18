import styled from "styled-components";
import { FlexWrapper } from '../../../components/FlexWrapper';
import {Icon} from "../../../components/icon/Icon.tsx";
import {Section} from "../../../components/section/Section.tsx";
import {Container} from "../../../components/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container >
                <Section title={'My Tech Stack'} description={' Technologies I’ve been working with recently'}></Section>
                {/*<FlexWrapper justify="space-around" gap={'100px'} align={'center'}>*/}
                    <IconsGrid>
                        <Icon iconId={'html'}/>
                        <Icon iconId={'css'}/>
                        <Icon iconId={'js'}/>
                        <Icon iconId={'react'}  />
                        <Icon iconId={'typescript'}/>
                        <Icon iconId={'github'}  />
                        <Icon iconId={'vscode'}/>
                        <Icon iconId={'webstorm'}/>
                        <Icon iconId={'git'} />
                        <Icon iconId={'sass'}  />
                        <Icon iconId={'bootstrap'}  />
                        <Icon iconId={'tailwind'} />
                    </IconsGrid>

                {/*</FlexWrapper>*/}
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    
`
const IconsGrid = styled.div`
  display: grid;
  gap: 40px;
  justify-content: center;

  grid-template-columns: repeat(3, 1fr);
    place-items: center;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`