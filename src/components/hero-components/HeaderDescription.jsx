import styled from "styled-components"

const HeaderDescriptionStyled = styled.p`
  margin-top: 1rem;
  margin-bottom: 4rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.125rem;
    padding: 0 20rem 0 20rem;
  }
`

const HeaderDescription = () => {
  return (
    <HeaderDescriptionStyled>
      With my background in linguistics and language education, learning how to talk to computers was a natural next step in my career. I enjoy cracking complex systems, tackling new technologies, and approaching every project as an opportunity to learn and grow. Check out my work below!
    </HeaderDescriptionStyled>
  )
}

export default HeaderDescription