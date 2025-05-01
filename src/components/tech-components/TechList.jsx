import styled from "styled-components"

const TechListStyled = styled.p`
  margin: 1rem 0 4rem 0;
  padding: 0 1rem 0 1rem;

  @media (min-width: 1024px) {
    margin: 2rem 0 2rem 0;
    font-size: 1.125rem;
    padding: 0 20rem 0 20rem;
  }
`

const TechList = () => {
  return (
    <TechListStyled>
      HTML, CSS, Flexbox, JavaScript, TypeScript, JSX, React, Next.js, Node.js, MongoDB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub. 
    </TechListStyled>
  )
}

export default TechList