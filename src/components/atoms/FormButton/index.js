import React from "react"
import styled from "styled-components"

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
  :disabled {
    background: #f2f3f6;
    cursor: not-allowed;
  }
`

export default props => {
  return <FormButton {...props} />
}
