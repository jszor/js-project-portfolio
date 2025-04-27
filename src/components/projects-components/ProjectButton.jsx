import styled from "styled-components"

const ProjectButtonStyled = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 90%;
  background: black;
  color: white;
  border: none;
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

const ProjectButtonAnchor = styled.a`
  text-decoration: none;
`

const ProjectButton = ({ link, imageSrc, imageAlt, buttonText }) => {
  return (
    <ProjectButtonAnchor href={link}>
      <ProjectButtonStyled type="button">
          <ProjectButtonImage src={imageSrc} alt={imageAlt} />
          <ProjectButtonText>{buttonText}</ProjectButtonText>
      </ProjectButtonStyled>
    </ProjectButtonAnchor>
  )
}

export default ProjectButton