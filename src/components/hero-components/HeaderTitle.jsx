import styled from "styled-components"

const HeaderParStyled = styled.p`
  margin-top: 4rem;
  font-size: 1.5rem;
  font-weight: 500;

  @media (min-width: 1024px) {
    font-size: 1.875rem;
  }
`

const HeaderTitleStyled = styled.h1`
  margin-top: 1rem;
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 3.5rem;

  @media (min-width: 1024px) {
    font-size: 6.25rem;
  }
`

const HeaderTitle = () => {
  return (
    <>
      <HeaderParStyled>Hey there, I'm 👋</HeaderParStyled>
      <HeaderTitleStyled>Juan Zorrilla</HeaderTitleStyled>
    </>
  )
}

export default HeaderTitle