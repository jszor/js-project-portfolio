import styled from "styled-components"
import HeaderTitle from "../components/hero-components/HeaderTitle.jsx"
import HeaderImage from "../components/hero-components/HeaderImage.jsx"
import HeaderAbout from "../components/hero-components/HeaderAbout.jsx"

const HeroStyled = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 1rem 0 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem 0 1.5rem;
  }
`

const Hero = () => {
  return (
    <HeroStyled>
      <HeaderTitle />
      <HeaderImage />
      <HeaderAbout />
    </HeroStyled>
  )
}

export default Hero