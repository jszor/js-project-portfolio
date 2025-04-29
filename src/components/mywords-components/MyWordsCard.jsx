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
`


const MyWordsCard = ({ imageSrc, imageAlt, date, title, description, link }) => {
  return (
    <div>
      <MyWordsImage src={imageSrc} alt={imageAlt} />
      <CardTextStyled>
        <MyWordsDate date={date} />
        <ProjectTitle title={title} />
        <MyWordsDescription description={description} />
        <MyWordsButton link={link} />
      </CardTextStyled>
    </div>
  )
}

export default MyWordsCard