import styled from "styled-components"

const MyWordsDateStyled = styled.p`
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.125rem 0.375rem;
  margin-top: 1.75rem;
  width: 50%;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const MyWordsDate = ({ date }) => {
  return (
    <MyWordsDateStyled>
      {date}
    </MyWordsDateStyled>
  ) 
}

export default MyWordsDate