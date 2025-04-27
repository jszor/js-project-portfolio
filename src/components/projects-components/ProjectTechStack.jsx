import styled from "styled-components"
import ProjectTechElement from "./ProjectTechElement.jsx"

const ProjectTechStackStyled = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;
`

const ProjectTechStack = ({ techStack }) => {
  return (
    <ProjectTechStackStyled>
      {techStack.map((tech) => (
        <ProjectTechElement key={tech} tech={tech} />
      ))}
    </ProjectTechStackStyled>
  )
}

export default ProjectTechStack