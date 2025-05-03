import styled from "styled-components"

const MyWordsButtonTextStyled = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`

const MyWordsButtonAnchor = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  width: 90%;
  background: black;
  color: white;
  border: none;
`

const MyWordsButtonImage = styled.img`
  margin-right: 1rem;
  height: 2rem;
  width: 2rem;
`

const MyWordsButton = ({ link }) => {
  return (
    <MyWordsButtonAnchor href={link}>
      <MyWordsButtonImage src="/icons/web_icon.svg" alt="Web Icon" />
      <MyWordsButtonTextStyled>Read article</MyWordsButtonTextStyled>
    </MyWordsButtonAnchor>
  )
}

export default MyWordsButton