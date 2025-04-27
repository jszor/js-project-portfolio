import styled from "styled-components"

const ProjectTitleStyled = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
`

const ProjectTitle = ({ title }) => {
  return (
    <ProjectTitleStyled>
      {title}
    </ProjectTitleStyled>
  )
}

export default ProjectTitle