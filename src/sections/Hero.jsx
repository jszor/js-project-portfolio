import styled from "styled-components"
import HeaderTitle from "../components/hero-components/HeaderTitle.jsx"
import HeaderImages from "../components/hero-components/HeaderImages.jsx"
import HeaderAbout from "../components/hero-components/HeaderAbout.jsx"

const HeroStyled = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 1rem 0 1rem;
`

const Hero = () => {
  return (
    <HeroStyled>
      <HeaderTitle />
      <HeaderImages />
      <HeaderAbout />
    </HeroStyled>
  )
}

export default Hero