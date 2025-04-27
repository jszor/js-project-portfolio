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
`

const ProjectCard = ({ imageSrc, imageAlt, techStack, title, description, githubLink, netlifyLink }) => {
  return (
    <ProjectCardStyled>
      <ProjectImage src={imageSrc} alt={imageAlt} />
      <ProjectTechStack techStack={techStack} />
      <ProjectTitle title={title} />
      <ProjectDescription description={description} />
      <ProjectButtons githubLink={githubLink} netlifyLink={netlifyLink} />
    </ProjectCardStyled>
  )
}

export default ProjectCard