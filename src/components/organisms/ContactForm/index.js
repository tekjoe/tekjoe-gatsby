import React, { useState } from "react"
import styled from "styled-components"

import Input from "../../atoms/Input"
import TextArea from "../../atoms/TextArea"
import FormButton from "../../atoms/FormButton"

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  label {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-family: monospace;
  }
`

export default props => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")

  return (
    <ContactForm {...props}>
      <label>Your Full Name (required)</label>
      <Input
        value={fullName}
        placeholder="Full Name"
        onChange={e => setFullName(e.target.value)}
        type="text"
        name="name"
      />
      <label>Your Email (required)</label>
      <Input
        value={email}
        placeholder="Email Address"
        onChange={e => setEmail(e.target.value)}
        type="email"
        name="email"
      />
      <label>Describe your project in detail (optional)</label>
      <TextArea
        onChange={e => setDescription(e.target.value)}
        value={description}
        name="description"
        placeholder="Please be thorough as possible"
        rows="5"
      />
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <FormButton disabled={!email || !fullName}>Send your message</FormButton>
    </ContactForm>
  )
}
