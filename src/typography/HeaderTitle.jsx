import styled from "styled-components"

const HeaderTitleStyled = styled.h1`
  font-size: 6.25rem;
  font-weight: 800;
`

const HeaderParStyled = styled.p`
  font-size: 1.875rem;
`

const HeaderTitle = () => {
  return (
    <>
      <HeaderParStyled>Hi there, I'm</HeaderParStyled>
      <HeaderTitleStyled>Juan Zorrilla</HeaderTitleStyled>
    </>
  )
}

export default HeaderTitle