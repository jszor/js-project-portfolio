import MyWordsImage from "./MyWordsImage.jsx"
import MyWordsDate from "./MyWordsDate.jsx"
import MyWordsDescription from "./MyWordsDescription.jsx"
import MyWordsButton from "./MyWordsButton.jsx"
import ProjectTitle from "../../typography/ProjectTitle.jsx"
import styled from "styled-components"

const CardTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 66.66%;
    max-width: 780px;
    padding: 0 2rem 0 2rem;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {

  }
`

const MyWordsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }

  @media (min-width: 1024px) {
    gap: 5rem;
  }
`


const MyWordsCard = ({ imageSrc, imageAlt, date, title, description, link }) => {
  return (
    <MyWordsCardWrapper>
      <MyWordsImage src={imageSrc} alt={imageAlt} />
      <CardTextStyled>
        <MyWordsDate date={date} />
        <ProjectTitle title={title} />
        <MyWordsDescription description={description} />
        <MyWordsButton link={link} />
      </CardTextStyled>
    </MyWordsCardWrapper>
  )
}

export default MyWordsCard