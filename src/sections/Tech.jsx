import styled from "styled-components"
import SectionTitle from "../typography/SectionTitle.jsx"
import TechList from "../components/tech-components/TechList.jsx"

const TechStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: black;
  color: white;
  padding-top: 4rem;
`

const Tech = () => {
  return (
    <TechStyled>
      <SectionTitle title="Tech" />
      <TechList />
    </TechStyled>
  )
}

export default Tech