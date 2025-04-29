const MyWordsButton = ({ link, imageSrc, imageAlt, buttonText}) => {
  return (
    <a href={link}>
      <button type="button">
        <img src={imageSrc} alt={imageAlt} />
        <p>{buttonText}</p>
      </button>
    </a>
  )
}

export default MyWordsButton