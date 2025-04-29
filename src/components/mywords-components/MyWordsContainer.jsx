import writing from "../../data/writing.json"
import MyWordsCard from "./MyWordsCard"

const MyWordsContainer = () => {
  return (
    <div>
      {writing.map((article) => (
        <MyWordsCard 
        key={article.id}
        imageSrc={article.imageSrc}
        imageAlt={article.imageAlt}
        date={article.date}
        title={article.title}
        description={article.description}
        link={article.link} />
      ))}
    </div>
  )
}

export default MyWordsContainer