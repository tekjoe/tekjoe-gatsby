import React from "react"
import styled from "styled-components"

const MastheadSection = styled.div`
  grid-area: masthead;
  grid-column: 1 / -1;
  margin: 4rem 2rem;
  @media (min-width: 768px) {
    margin: 4rem;
  }
  @media (min-width: 992px) {
    grid-column: 4 / -4;
    margin: 6rem 0;
  }
  @media (min-width: 1200px) {
  }
`

const Masthead = props => {
  return <MastheadSection {...props}>{props.children}</MastheadSection>
}

export default Masthead
