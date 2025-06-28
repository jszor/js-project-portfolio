import styled from "styled-components"

const HeaderRoleStyled = styled.h3`
  margin-top: 2rem;
  font-size: 1.25rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.875rem;
  }
`

const HeaderRole = () => {
  return (
    <HeaderRoleStyled>
      Full-Stack Developer
    </HeaderRoleStyled>
  )
}

export default HeaderRole