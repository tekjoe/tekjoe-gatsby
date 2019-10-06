import React from "react"
import styled from "styled-components"

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

export default props => {
  return <Input {...props} />
}
