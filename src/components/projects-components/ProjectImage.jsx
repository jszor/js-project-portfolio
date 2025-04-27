import styled from "styled-components"

const ProjectImageStyled = styled.img`
  width: 100%;
  height: auto;
`

const ProjectImage = ({ src, alt }) => {
  return (
    <ProjectImageStyled src={src} alt={alt} />
  )
}

export default ProjectImage