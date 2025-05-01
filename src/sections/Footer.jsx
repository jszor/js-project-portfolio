import SectionTitle from "../typography/SectionTitle.jsx"
import ContactInfo from "../components/footer-components/ContactContainer.jsx"
import styled from "styled-components"

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 4rem 1rem 4rem 1rem;
  background: black;
  color: white;
  height: 100vh;
`

const Footer = () => {
  return (
    <FooterStyled>
      <SectionTitle title="Let's Talk" />
      <ContactInfo />
    </FooterStyled>
  )
}

export default Footer