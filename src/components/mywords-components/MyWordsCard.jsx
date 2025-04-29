import MyWordsImage from "./MyWordsImage.jsx"
import MyWordsDate from "./MyWordsDate.jsx"
import MyWordsDescription from "./MyWordsDescription.jsx"
import MyWordsButton from "./MyWordsButton.jsx"
import ProjectTitle from "../../typography/ProjectTitle.jsx"

const MyWordsCard = ({ imageSrc, imageAlt, date, title, description, link }) => {
  return (
    <div>
      <MyWordsImage src={imageSrc} alt={imageAlt} />
      <MyWordsDate date={date} />
      <ProjectTitle title={title} />
      <MyWordsDescription description={description} />
      <MyWordsButton link={link} />
    </div>
  )
}

export default MyWordsCard