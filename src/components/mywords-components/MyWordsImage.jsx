import styled from "styled-components"

const MyWordsImageStyled = styled.img`
  width: 100%;
  height: auto;
  margin-top: 4rem;

   @media (min-width: 768px) {
    width: 33.33%;
    max-width: 384px;
    height: 100%;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    object-fit: cover;
    margin-top: 0;
    border-radius: 12px;
  }

  @media (min-width: 1024px) {
    aspect-ratio: 4 / 3;
  }
`

const MyWordsImage = ({ src, alt }) => {
  return (
    <MyWordsImageStyled src={src} alt={alt} />
  )
}

export default MyWordsImage