const MyWordsButton = ({ link }) => {
  return (
    <a href={link}>
      <button type="button">
        <img src="/icons/web_icon.svg" alt="Web Icon" />
        <p>Read article</p>
      </button>
    </a>
  )
}

export default MyWordsButton