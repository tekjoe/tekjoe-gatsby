import React, { useState } from "react"
import styled from "styled-components"

import Input from "../../atoms/Input"
import TextArea from "../../atoms/TextArea"
import FormButton from "../../atoms/FormButton"

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  label {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-family: monospace;
  }
  @media (min-width: 992px) {
    padding: 2rem;
  }
`

export default props => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")

  return (
    <ContactForm {...props}>
      <label htmlFor="name">Your Full Name</label>
      <Input
        id="name"
        value={fullName}
        placeholder="Full Name"
        onChange={e => setFullName(e.target.value)}
        type="text"
        name="name"
      />
      <label htmlFor="email">Your Email</label>
      <Input
        id="email"
        value={email}
        placeholder="Email Address"
        onChange={e => setEmail(e.target.value)}
        type="email"
        name="email"
      />
      <label htmlFor="message">
        Describe your project in detail (optional)
      </label>
      <TextArea
        id="message"
        onChange={e => setDescription(e.target.value)}
        value={description}
        name="description"
        placeholder="Please be thorough as possible"
        rows="5"
      />
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <FormButton onClick={e => e.preventDefault()}>
        Send your message
      </FormButton>
    </ContactForm>
  )
}
