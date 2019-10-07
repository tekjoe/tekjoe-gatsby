import React from "react"
import styled from "styled-components"

const Badge = styled.span`
  background: #4666c9;
  color: white;
  width: fit-content;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  margin-right: 0.25rem;
`

export default ({ children }) => {
  return <Badge>{children}</Badge>
}
