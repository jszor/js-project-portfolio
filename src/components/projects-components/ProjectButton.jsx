import styled from "styled-components"

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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 90%;
  background: black;
  color: white;
  border: none;

  @media (min-width: 768px) {
    width: 100%;
  }
`

const ProjectButton = ({ link, imageSrc, imageAlt, buttonText }) => {
  return (
    <ProjectButtonAnchor href={link}>
      <ProjectButtonImage src={imageSrc} alt={imageAlt} />
      <ProjectButtonText>{buttonText}</ProjectButtonText>
    </ProjectButtonAnchor>
  )
}

export default ProjectButton