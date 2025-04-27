import styled from "styled-components"

const SkillCardStyled = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 1rem;
`

const SkillCardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0.125rem 0.375rem;
  width: 50vw;
`

const SkillCardList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`

const SkillCard = ({ title, skills }) => {
  return (
    <SkillCardStyled>
      <SkillCardTitle>
        {title}
      </SkillCardTitle>
      <SkillCardList>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </SkillCardList>
    </SkillCardStyled>
  )
}

export default SkillCard