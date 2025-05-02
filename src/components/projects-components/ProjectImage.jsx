import styled from "styled-components"

const ProjectImageStyled = styled.img`
  width: 100%;
  height: auto;
  display: block;
`

const PictureStyled = styled.picture`
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    flex: 1;
    flex-basis: 50%;
    max-width: 50%;
  }
`

const ProjectImage = ({ srcMobile, srcDesktop, alt }) => {
  return (
    <PictureStyled>
      <source srcSet={srcDesktop} media="(min-width: 1024px)" />
      <ProjectImageStyled src={srcMobile} alt={alt} />
    </PictureStyled>
  )
}

export default ProjectImage