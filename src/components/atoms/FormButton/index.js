import React from "react"
import styled from "styled-components"

const FormButton = styled.button`
  background: #3a837a;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in;
  font-weight: bold;
  border: none;
  -webkit-appearance: none;
  border-radius: 5px;
  padding: 0.75rem;
  margin-bottom: 2rem;
  transition: background 0.5s, transform 0.3s, box-shadow 0.3s;
  font-size: 1rem;
  &:hover {
    background: #2ab280;
    color: white;
    transform: scale(1.01);
    box-shadow: 0 1px 4px hsla(0, 0%, 0%, 0.2);
  }
  &:active {
    transform: scale(0.98);
  }
`

export default props => {
  return <FormButton {...props} />
}
