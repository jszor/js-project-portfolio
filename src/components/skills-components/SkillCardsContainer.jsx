import SkillCard from "./SkillCard.jsx"
import skills from "../../data/skills.json"
import styled from "styled-components"

const SkillCardsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
`

const SkillCardsContainer = () => {
  return (
    <SkillCardsContainerStyled>
      <SkillCard title="Tech" skills={skills.tech} />
      <SkillCard title="Toolbox" skills={skills.toolbox} />
      <SkillCard title="More" skills={skills.more} />
    </SkillCardsContainerStyled>
  )
}

export default SkillCardsContainer