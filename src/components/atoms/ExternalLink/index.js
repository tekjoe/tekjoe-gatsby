import React from "react"
import styled from "styled-components"

const ExternalLink = styled.a`
  color: ${({ theme, variant }) =>
    variant === "green" ? theme.colors.mintGreen : theme.colors.linkText};
  text-decoration: none;
  padding-bottom: 0.25rem;
  background: ${({ theme }) => theme.colors.linkUnderline};
  background-size: 100% 0.85rem;
  background-repeat: no-repeat;
  background-position: left 85%;
  span {
    display: inline;
    transition: all 0.15s linear;
    text-decoration: none;
    padding-bottom: 0.25rem;
    background: ${({ theme }) => theme.colors.linkUnderlineHover};
    background-size: 0% 0.85rem;
    background-repeat: no-repeat;
    background-position: left 85%;
    &:hover {
      background-size: 100% 0.85rem;
    }
  }
`

export default props => {
  return <ExternalLink {...props}>{props.children}</ExternalLink>
}
