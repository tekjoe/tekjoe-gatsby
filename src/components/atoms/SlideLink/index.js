import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SlideLink = styled(Link)`
  color: #005ebf;
  text-decoration: none;
  padding-bottom: 0.25rem;
  background: linear-gradient(to right, #f2f3f6 0%, #f2f3f6 100%);
  background-size: 100% 0.85rem;
  background-repeat: no-repeat;
  background-position: left 85%;
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
