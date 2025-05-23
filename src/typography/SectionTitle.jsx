import styled from "styled-components"

const SectionTitleStyled = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  line-height: 3.5rem;

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`

const SectionTitle = ({ title }) => {
  return (
    <SectionTitleStyled>{title}</SectionTitleStyled>
  )
}

export default SectionTitle