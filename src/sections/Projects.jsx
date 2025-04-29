import SectionTitle from "../typography/SectionTitle.jsx"
import styled from "styled-components"
import ProjectsContainer from "../components/projects-components/ProjectsContainer.jsx"
import ProjectsSeeMore from "../components/projects-components/ProjectsSeeMore.jsx"

const ProjectsStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 4rem 1rem 0 1rem;
`

const Projects = () => {
  return (
    <ProjectsStyled>
      <SectionTitle title="Projects" />
      <ProjectsContainer />
      <ProjectsSeeMore text="See more projects" />
    </ProjectsStyled>
  )
}

export default Projects