import styled from "styled-components"

const ProjectTechElementStyled = styled.p`
  margin-right: 0.5rem;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.125rem 0.375rem;
  `

const ProjectTechElement = ({ tech }) => {
  return (
    <ProjectTechElementStyled>
      {tech}
    </ProjectTechElementStyled>
  )
}

export default ProjectTechElement