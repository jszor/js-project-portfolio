import styled from "styled-components"

const ProjectDescriptionStyled = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`

const ProjectDescription = ({ description }) => {
  return (
    <ProjectDescriptionStyled>
      {description}
    </ProjectDescriptionStyled>
  )
}

export default ProjectDescription