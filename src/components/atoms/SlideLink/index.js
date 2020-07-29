import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SlideLink = styled(Link)`
  color: ${({ theme, variant }) =>
    variant === "green" ? theme.colors.mintGreen : theme.colors.linkText};
  text-decoration: none;
  padding-bottom: 0.25rem;
  background: ${({ theme }) => theme.colors.linkUnderline};
  background-size: 100% 0.85rem;
  background-repeat: no-repeat;
  background-position: left 85%;
  font-size: ${({ theme, fontSize }) =>
    (fontSize === "h6" && theme.typography.h6) ||
    (fontSize === "h5" && theme.typography.h5) ||
    (fontSize === "h4" && theme.typography.h4)};
  &:hover {
    color: ${({ theme, variant }) =>
      variant === "green" ? theme.colors.darkBlue : "#005ebf"};
  }
  span {
    display: inline;
    transition: all 0.15s linear;
    text-decoration: none;
    padding-bottom: 0.25rem;
    background: linear-gradient(to right, #18f0ae 0%, #18f0ae 100%);
    background-size: 0% 0.85rem;
    background-repeat: no-repeat;
    background-position: left 85%;
    &:hover {
      background-size: 100% 0.85rem;
    }
  }
`

export default props => {
  return (
    <SlideLink {...props}>
      <span>{props.children}</span>
    </SlideLink>
  )
}
