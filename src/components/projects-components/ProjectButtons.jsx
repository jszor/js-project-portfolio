import ProjectButton from "./ProjectButton.jsx"
import styled from "styled-components"

const ProjectButtonsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  gap: 0.5rem;
  `

const ProjectButtons = ({ githubLink, netlifyLink }) => {
  return (
    <ProjectButtonsStyled>
      <ProjectButton link={githubLink} imageSrc="/icons/github_icon.svg" imageAlt="GitHub Icon" buttonText="View Code" />
      <ProjectButton link={netlifyLink} imageSrc="/icons/web_icon.svg" imageAlt="Web Icon" buttonText="Live Demo" />
    </ProjectButtonsStyled>
  )
}

export default ProjectButtons