import SectionTitle from "../typography/SectionTitle.jsx"
import styled from "styled-components"
import ProjectsContainer from "../components/projects-components/ProjectsContainer.jsx"
import ProjectsSeeMore from "../components/projects-components/ProjectsSeeMore.jsx"

const ProjectsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Projects = () => {
  return (
    <ProjectsStyled>
      <SectionTitle title="Projects" />
      <ProjectsContainer />
      <ProjectsSeeMore />
    </ProjectsStyled>
  )
}

export default Projects