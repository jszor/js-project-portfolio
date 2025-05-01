import styled from "styled-components"

const ContactInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 1rem 0 1rem;
  margin-top: 1rem;
  gap: 0.5rem;
`

const ContactTitleStyled = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
`

const ContactInfo = () => {
  return (
    <ContactInfoStyled>
      <ContactTitleStyled>Juan Salvador Zorrilla</ContactTitleStyled>
      <ContactTitleStyled>+47 467 57 090</ContactTitleStyled>
      <ContactTitleStyled>jsalvadorzorrilla@gmail.com</ContactTitleStyled>
    </ContactInfoStyled>
  )
}

export default ContactInfo