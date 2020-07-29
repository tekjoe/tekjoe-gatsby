import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import barChart from "../../../images/bar-chart.svg"

const SignUpLink = styled(Link)`
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

const SignUpSection = styled.section`
  grid-area: sign-up;
  grid-column: 2 / -2;
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 992px) {
  }
`

const SignUpImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.gradientBottomRight};
  img {
    width: 100%;
  }
  @media (min-width: 992px) {
    padding: 4rem;
  }
`

const SignUpBody = styled.div`
  color: white;
  background: ${({ theme }) => theme.colors.accentColor};
  justify-content: space-between;
  flex: 2;
  padding: 3rem;
  & > * {
    margin-bottom: 1.5rem;
  }
  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.mintGreen};
  }
  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }
  @media (min-width: 992px) {
    padding: 4rem;
  }
`

export default () => {
  return (
    <SignUpSection>
      <SignUpImage>
        <img src={barChart} alt="Success with tekjoe web design" />
      </SignUpImage>
      <SignUpBody>
        <h2>Are you a business looking to level up your website?</h2>
        <p>
          I help small businesses, creatives, and non-profit organizations bring
          their visions to life thoroughly and elegantly. If you're ready to
          take your site to the next level, I can help.
        </p>
        <SignUpLink to="/">Contact</SignUpLink>
      </SignUpBody>
    </SignUpSection>
  )
}
