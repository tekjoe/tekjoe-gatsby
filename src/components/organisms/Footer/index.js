import React from "react"
import styled from "styled-components"
import SlideLink from "../../atoms/SlideLink"
import ExternalLink from "../../atoms/ExternalLink"

const Footer = styled.footer`
  grid-area: footer;
  grid-column: 2 / -2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 4rem;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`

const FooterBio = styled.div`
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  margin-bottom: 2rem;
  font-size: 1.125rem;
  @media (min-width: 1200px) {
    flex: 1;
    padding-right: 2rem;
  }
`

const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 2rem;
  ul {
    list-style-type: none;
    margin-bottom: 2rem;
    font-size: 1.125rem;
    li {
      margin-bottom: 1rem;
      &:first-child {
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    flex: 2;
    margin-left: 2rem;
  }
`

export default () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <Footer>
      <FooterBio>
        <h2>&lt;tekjoe/&gt;</h2>
        <p>
          Freelance web developer with a passion for solving problems. Let's
          build something together.
        </p>
        <SlideLink to="/">Learn more about me</SlideLink>
      </FooterBio>
      <FooterNav>
        <ul>
          <li>Navigate</li>
          <li>
            <SlideLink to="/">About</SlideLink>
          </li>
          <li>
            <SlideLink to="/">Contact</SlideLink>
          </li>
          <li>
            <SlideLink to="/">Blog</SlideLink>
          </li>
        </ul>
        <ul>
          <li>Connect</li>
          <li>
            <ExternalLink
              href="https://www.instagram.com/tekjoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://www.twitter.com/_tekjoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Twitter</span>
            </ExternalLink>
          </li>
          <li>
            <ExternalLink
              href="https://codepen.io/tekjoe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>CodePen</span>
            </ExternalLink>
          </li>
        </ul>
        <ul>
          <li>© {year} </li>
        </ul>
      </FooterNav>
    </Footer>
  )
}
