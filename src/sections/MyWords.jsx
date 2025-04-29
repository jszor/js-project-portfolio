import SectionTitle from "../typography/SectionTitle.jsx"
import MyWordsContainer from "../components/mywords-components/MyWordsContainer.jsx"
import ProjectsSeeMore from "../components/projects-components/ProjectsSeeMore.jsx"

const MyWords = () => {
  return (
    <div>
      <SectionTitle title="My Words" />
      <MyWordsContainer />
      <ProjectsSeeMore text="See more articles" />
    </div>
  )
}

export default MyWords