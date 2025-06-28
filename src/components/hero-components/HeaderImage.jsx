import styled from "styled-components"
import headerImage from "../../assets/header_img.webp"

const HeaderImageStyled = styled.img`
  display: block;
  max-width: 250px;
  align-self: center;
  margin-top: 3.5rem;
  border-radius: 15px;
  border: 2px solid black;

  @media (min-width: 768px) {
    max-width: 450px;
  }
`

const HeaderImage = () => {
  return (
    <HeaderImageStyled src={headerImage} alt="header image" />
  )
}

export default HeaderImage