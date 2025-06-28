import styled from "styled-components"

const HeaderDescriptionStyled = styled.p`
  margin-top: 1rem;
  margin-bottom: 4rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    padding: 0 10rem 0 10rem;
  }
`

const HeaderDescription = () => {
  return (
    <HeaderDescriptionStyled>
      I'm a full-stack MERN developer with a background in linguistics and education who transitioned to software development out of a passion for tech and a desire to help solve real-world problems with code.
    </HeaderDescriptionStyled>
  )
}

export default HeaderDescription