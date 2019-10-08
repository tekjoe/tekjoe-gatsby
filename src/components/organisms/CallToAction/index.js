import React from "react"
import styled from "styled-components"
import contemplate from "../../../images/tekjoe-thinking.svg"
import { Link } from "gatsby"

const CtaSection = styled.section`
  grid-area: cta;
  grid-column: 1/-1;
  background: #263d83;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`

const CtaBody = styled.div`
  order: 2;
  padding: 4rem 2rem;
  @media (min-width: 768px) {
    order: 2;
    flex: 1;
    padding: 4rem;
  }
  @media (min-width: 992px) {
    order: 1;
  }
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

const CtaImage = styled.div`
  img {
    order: 1;
    padding: 2rem;
    background-image: linear-gradient(
      45deg,
      #ff5458 0%,
      #ffc1bd 50%,
      #ffd123 100%
    );
    max-width: 100%;
    height: 100%;
  }
  @media (min-width: 768px) {
    order: 1;
    flex: 1;
  }
  @media (min-width: 992px) {
    order: 2;
  }
`

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.h6};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.lightBlue};
`

const Title = styled.p`
  font-size: 2.25rem;
  color: white;
  margin-bottom: 1.125rem;
  line-height: 1.3;
`

export default () => {
  return (
    <CtaSection>
      <CtaBody>
        <Subtitle>Latest Work –</Subtitle>
        <Title>Building a better tomorrow, one website at a time.</Title>
        <CtaLink to="/about">See my profile</CtaLink>
      </CtaBody>
      <CtaImage style={{ height: "100%", width: "100%" }}>
        <img src={contemplate} alt="Tekjoe contemplating web design" />
      </CtaImage>
    </CtaSection>
  )
}
