import ProjectButton from "./ProjectButton.jsx"

const ProjectButtons = ({ githubLink, netlifyLink }) => {
  return (
    <>
      <ProjectButton link={githubLink} imageSrc="../../assets/github_icon.svg" imageAlt="GitHub Icon" buttonText="View Code" />
      <ProjectButton link={netlifyLink} imageSrc="../../assets/netlify_icon.svg" imageAlt="Web Icon" buttonText="Live Demo" />
    </>
  )
}

export default ProjectButtons