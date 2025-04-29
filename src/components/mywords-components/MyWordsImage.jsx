import styled from "styled-components"

const MyWordsImageStyled = styled.img`
  width: 100%;
  height: auto;
  margin-top: 4rem;
`

const MyWordsImage = ({ src, alt }) => {
  return (
    <MyWordsImageStyled src={src} alt={alt} />
  )
}

export default MyWordsImage