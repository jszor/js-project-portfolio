import styled from "styled-components"

const ProjectButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  background: black;
  color: white;
`

const ProjectButtonImage = styled.img`
  margin-right: 1rem;
  height: 2rem;
  width: 2rem;
`

const ProjectButtonText = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`

const ProjectButton = ({ link, imageSrc, imageAlt, buttonText }) => {
  return (
    <a href={link}>
      <ProjectButtonStyled type="button">
          <ProjectButtonImage src={imageSrc} alt={imageAlt} />
          <ProjectButtonText>{buttonText}</ProjectButtonText>
      </ProjectButtonStyled>
    </a>
  )
}

export default ProjectButton