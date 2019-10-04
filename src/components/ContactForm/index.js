import React, { useState } from "react"
import styled from "styled-components"

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

const TextArea = styled.textarea`
  border: 2px solid #f2f3f6;
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.75rem;
  margin-bottom: 2rem;
  transition: all 0.5s;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &:focus {
    border: 2px solid #18f0ae;
  }
  resize: vertical;
`

const Input = styled.input`
  border: 2px solid #f2f3f6;
  font-size: 1rem;
  border-radius: 5px;
  padding: 0.75rem;
  margin-bottom: 2rem;
  transition: all 0.5s;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  &:focus {
    border: 2px solid #18f0ae;
  }
`

const FormButton = styled.button`
  background: #18f0ae;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in;
  font-weight: bold;
  border: none;
  -webkit-appearance: none;
  border-radius: 5px;
  padding: 0.75rem;
  margin-bottom: 2rem;
  transition: all 0.5s;
  font-size: 1rem;
  &:hover {
    background: #fe90ad;
    color: white;
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
      <FormButton>Send your message</FormButton>
    </ContactForm>
  )
}
