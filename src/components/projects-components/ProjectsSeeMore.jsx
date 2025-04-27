import styled from "styled-components"

const ProjectsSeeMoreStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  background: white;
  color: black;
`

const ProjectsSeeMoreImage = styled.img`
  margin-right: 1rem;
  height: 2rem;
  width: 2rem;
`

const ProjectsSeeMoreText = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`

const ProjectsSeeMore = () => {
  return (
    <a href="#">
      <ProjectsSeeMoreStyled type="button">
          <ProjectsSeeMoreImage src="../../assets/down_arrow_icon.svg" alt="Down arrow icon" />
          <ProjectsSeeMoreText>See more projects</ProjectsSeeMoreText>
      </ProjectsSeeMoreStyled>
    </a>
  )
}

export default ProjectsSeeMore