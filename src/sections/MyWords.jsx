import SectionTitle from "../typography/SectionTitle.jsx"
import MyWordsContainer from "../components/mywords-components/MyWordsContainer.jsx"
import ProjectsSeeMore from "../components/projects-components/ProjectsSeeMore.jsx"
import styled from "styled-components"

const MyWordsStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 4rem 1rem 0 1rem;

  @media (min-width: 768px) {
    padding: 4rem 1.5rem 0 1.5rem;
  }
`

const MyWords = () => {
  return (
    <MyWordsStyled>
      <SectionTitle title="My Words" />
      <MyWordsContainer />
      <ProjectsSeeMore text="See more articles" />
    </MyWordsStyled>
  )
}

export default MyWords