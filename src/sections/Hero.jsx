import "./Hero.css"
import HeaderTitle from "../typography/HeaderTitle.jsx"
import HeaderImages from "../components/HeaderImages.jsx"
import HeaderAbout from "../components/HeaderAbout.jsx"

const Hero = () => {
  return (
    <header>
      <HeaderTitle />
      <HeaderImages />
      <HeaderAbout />
    </header>
  )
}

export default Hero