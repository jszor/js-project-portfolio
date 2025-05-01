import headshot from "../../assets/footer_img.png"
import ContactIcons from "./ContactIcons.jsx"
import ContactInfo from "./ContactInfo.jsx"
import styled from "styled-components"

const ContactContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 2rem;
  gap: 2rem;
`

const ContactImageStyle = styled.img`
  align-self: center;
  width: 164px;
`

const ContactContainer = () => {
  return (
    <ContactContainerStyled >
      <ContactImageStyle src={headshot} alt="headshot" />
      <ContactInfo />
      <ContactIcons />
    </ContactContainerStyled  >
  )
}

export default ContactContainer