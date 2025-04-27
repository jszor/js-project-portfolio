import SkillCardsContainer from "../components/skills-components/SkillCardsContainer.jsx"
import SectionTitle from "../typography/SectionTitle.jsx"
import styled from "styled-components"

const SkillsStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 4rem 1rem 4rem 1rem;
  background: black;
  color: white;
`

const Skills = () => {
  return (
    <SkillsStyled>
      <SectionTitle title="Skills" />
      <SkillCardsContainer />
    </SkillsStyled>
  )
}

export default Skills