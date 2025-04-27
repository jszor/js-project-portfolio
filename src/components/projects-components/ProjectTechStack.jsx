import styled from "styled-components"
import ProjectTechElement from "./ProjectTechElement.jsx"

const ProjectTechStackStyled = styled.div`
  display: flex;
  flex-direction: row; 
  width: 100%;
  justify-content: center;
  gap: 0.5rem;
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