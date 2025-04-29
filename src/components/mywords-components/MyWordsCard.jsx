import MyWordsImage from "./MyWordsImage.jsx"
import MyWordsDate from "./MyWordsDate.jsx"
import MyWordsDescription from "./MyWordsDescription.jsx"
import MyWordsButton from "./MyWordsButton.jsx"

const MyWordsCard = ({ imageSrc, imageAlt, date }) => {
  return (
    <div>
      <MyWordsImage src={imageSrc} alt={imageAlt} />
      <MyWordsDate date={date} />
      // title
      <MyWordsDescription />
      <MyWordsButton />
    </div>
  )
}

export default MyWordsCard