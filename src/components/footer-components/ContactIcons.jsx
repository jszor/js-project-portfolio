import styled from "styled-components"

const ContactIconsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
`

const ContactIconStyled = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`

const ContactIcons = () => {
  return (
    <ContactIconsStyled>
        <a href="https://www.linkedin.com/in/juan-salvador-zorrilla-88b83635a/">
          <ContactIconStyled src="/icons/btn_linkedin.svg" alt="linkedin"/>
        </a>
        <a href="https://github.com/jszor">
          <ContactIconStyled src="/icons/btn_github.svg" alt="github"/>
        </a>
    </ContactIconsStyled>
  )
}

export default ContactIcons