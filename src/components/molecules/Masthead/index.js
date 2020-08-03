import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

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

MastheadSection.Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h2};
`

const Masthead = props => {
  return <MastheadSection {...props}>{props.children}</MastheadSection>
}

export default Masthead
