import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const CallToAction = styled.div`
  order: 2;
  padding: 4rem 2rem;
  @media (min-width: 768px) {
    order: 2;
    flex: 1;
    flex-basis: 50%;
    padding: 4rem;
  }
  @media (min-width: 992px) {
    order: 1;
  }
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.h6};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.subtitleColor};
  &:after {
    content: " –";
  }
`

const Title = styled.p`
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.accentColorInverse};
  margin-bottom: 1.125rem;
  line-height: 1.3;
`

const CtaLink = styled(Link)`
  font-size: 1.5rem;
  color: #18f0ae;
  font-weight: normal;
  text-decoration: none;
  transition: all 0.3s;
  &:after {
    content: " ⇢";
  }
  &:hover {
    color: white;
  }
`

export default ({ subtitle, title, link }) => {
  return (
    <CallToAction>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      {link === "arrow" ? (
        <p>Arrow link</p>
      ) : (
        <CtaLink to="/about">See my portfolio</CtaLink>
      )}
    </CallToAction>
  )
}
