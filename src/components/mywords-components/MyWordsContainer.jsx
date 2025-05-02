import writing from "../../data/writing.json"
import MyWordsCard from "./MyWordsCard"
import styled from "styled-components"

const MyWordsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    margin-top: 4rem;
  }
`

const MyWordsContainer = () => {
  return (
    <MyWordsContainerStyled>
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
    </MyWordsContainerStyled>
  )
}

export default MyWordsContainer