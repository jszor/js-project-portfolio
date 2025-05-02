import styled from "styled-components"
import ProjectImage from "./ProjectImage.jsx"
import ProjectTechStack from "./ProjectTechStack.jsx"
import ProjectTitle from "../../typography/ProjectTitle.jsx"
import ProjectDescription from "./ProjectDescription.jsx"
import ProjectButtons from "./ProjectButtons.jsx"

const ProjectCardStyled = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  margin-top: 4rem;
  gap: 1rem;

  @media(min-width: 768px) {
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    justify-content: space-between;
  }
`

const ProjectCardInfoStyled = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex: 1;
    flex-basis: 50%;
    max-width: 50%;
  }
`

const ProjectCard = ({ srcMobile, srcDesktop, imageAlt, techStack, title, description, githubLink, netlifyLink, reverse }) => {
  return (
    <ProjectCardStyled $reverse={reverse}>
      <ProjectImage srcMobile={srcMobile} srcDesktop={srcDesktop} alt={imageAlt} />
      <ProjectCardInfoStyled>
        <ProjectTechStack techStack={techStack} />
        <ProjectTitle title={title} />
        <ProjectDescription description={description} />
        <ProjectButtons githubLink={githubLink} netlifyLink={netlifyLink} />
      </ProjectCardInfoStyled>
    </ProjectCardStyled>
  )
}

export default ProjectCard