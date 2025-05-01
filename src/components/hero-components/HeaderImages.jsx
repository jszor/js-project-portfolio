import office from "../../assets/header_img_1.png"
import headshot from "../../assets/header_img_2.png"
import coding from "../../assets/header_img_3.png"
import styled from "styled-components"

const HeroSectionWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`

const HeaderImagesStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 285px;
  height: 160px;
`

const ImageStyled = styled.img`
  position: absolute;
  z-index: ${({ $z }) => $z || "0"};
  top: ${({ $top }) => $top || "0"};
  left: ${({ $left }) => $left || "0"};
  width: 144px;
`

const HeaderImages = () => {
  return (
    <HeroSectionWrapper>
      <HeaderImagesStyled>
        <ImageStyled src={office} alt="office" $z="0" $top="0" $left="0%" />
        <ImageStyled src={headshot} alt="headshot" $z="1" $top="0px" $left="25%" />
        <ImageStyled src={coding} alt="coding" $z="0" $top="0" $left="50%" />
      </HeaderImagesStyled>
    </HeroSectionWrapper>
  )
}

export default HeaderImages