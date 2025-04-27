import styled from "styled-components"
import ProjectCard from "./ProjectCard"
import projects from "../../data/projects"

const ProjectsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProjectsContainer = () => {
  return (
    <ProjectsContainerStyled>
      {projects.projects.map((project) => (
        <ProjectCard 
        key={project.id}
        imageSrc={project.image}
        imageAlt={project.imageAlt}
        techStack={project.techStack}
        title={project.name}
        description={project.description}
        githubLink={project.github}
        netlifyLink={project.netlify} />
      ))}
    </ProjectsContainerStyled>
  )
}

export default ProjectsContainer