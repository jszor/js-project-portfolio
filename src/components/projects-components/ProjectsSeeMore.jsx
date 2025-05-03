import styled from "styled-components"

const ProjectsSeeMoreImage = styled.img`
  margin-right: 1rem;
  height: 2rem;
  width: 2rem;
`

const ProjectsSeeMoreText = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`

const ProjectsSeeMoreAnchor = styled.a`
  text-decoration: none;
  margin: 4rem 0 4rem 0;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: 12px;
  background: white;
  color: black;
`

const ProjectsSeeMore = ({ text }) => {
  return (
    <ProjectsSeeMoreAnchor href="#">
      <ProjectsSeeMoreImage src="/icons/down_arrow_icon.svg" alt="Down arrow icon" />
      <ProjectsSeeMoreText>{text}</ProjectsSeeMoreText>
    </ProjectsSeeMoreAnchor>
  )
}

export default ProjectsSeeMore