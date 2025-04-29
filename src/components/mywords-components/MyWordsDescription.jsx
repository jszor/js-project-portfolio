import styled from "styled-components"

const MyWordsDescriptionStyled = styled.p`
  margin-bottom: 1rem;
`

const MyWordsDescription = ({ description }) => {
  return (
    <MyWordsDescriptionStyled>
      {description}
    </MyWordsDescriptionStyled>
  )
}

export default MyWordsDescription