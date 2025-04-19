import styled from "styled-components";
const Skills = styled.section`
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
export const S={
    Skills,
    IconsGrid,
}