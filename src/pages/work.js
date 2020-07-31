import React from "react"
import styled from "styled-components"
import { Layout } from "../components/organisms/Layout"
import Masthead from "../components/molecules/Masthead"
import ExternalLink from "../components/atoms/ExternalLink"
import SEO from "../components/seo"
import SignUp from "../components/organisms/SignUp"

const PortfolioGrid = styled.section`
  grid-column: 2/-2;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  @media (min-width: 992px) {
    grid-gap: 3rem;
  }
`
const Project = styled.article`
  grid-column: 1/-1;
  margin-bottom: 3rem;
  h3 {
    font-size: ${({ theme }) => theme.typography.h5};
  }
  @media (min-width: 992px) {
    grid-column: span 6;
  }
`

Project.Img = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.gradientTopRight};
  height: 300px;
  margin-bottom: 1rem;
  img {
    display: block;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`
Project.Body = styled.div`
  h3,
  p {
    margin-bottom: 1rem;
  }
`

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <Masthead>
      <h1 style={{ marginBottom: "1rem", fontSize: "3rem" }}>
        Recent Projects
      </h1>
      <p>
        I work closely with each and every client to make sure that the end
        product is exactly what they envisioned. Take a look below to see some
        examples of my past projects.
      </p>
    </Masthead>
    <PortfolioGrid>
      <Project>
        <Project.Img>
          <img src="" alt="Oak Ridge Contracting" />
        </Project.Img>
        <Project.Body>
          <h3>
            <ExternalLink
              href="https://www.oakridgecontracting.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Oak Ridge Contracting</span>
            </ExternalLink>
          </h3>
          <p>
            Oak Ridge Contracting is a small business in southeastern Wisconsin
            that was looking to improve their presence online. This website is
            blazing fast because it's powered by Gatbsy.js, a static site
            generator for React applications.
          </p>
          <ExternalLink
            href="https://www.oakridgecontracting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
          </ExternalLink>
        </Project.Body>
      </Project>
      <Project>
        <Project.Img>
          <img src="" alt="Oak Ridge Contracting" />
        </Project.Img>
        <Project.Body>
          <h3>
            <ExternalLink
              href="https://www.oakridgecontracting.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Oak Ridge Contracting</span>
            </ExternalLink>
          </h3>
          <p>
            Oak Ridge Contracting is a small business in southeastern Wisconsin
            that was looking to improve their presence online. This website is
            blazing fast because it's powered by Gatbsy.js, a static site
            generator for React applications.
          </p>
          <ExternalLink
            href="https://www.oakridgecontracting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
          </ExternalLink>
        </Project.Body>
      </Project>
      <Project>
        <Project.Img>
          <img src="" alt="Oak Ridge Contracting" />
        </Project.Img>
        <Project.Body>
          <h3>
            <ExternalLink
              href="https://www.oakridgecontracting.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Oak Ridge Contracting</span>
            </ExternalLink>
          </h3>
          <p>
            Oak Ridge Contracting is a small business in southeastern Wisconsin
            that was looking to improve their presence online. This website is
            blazing fast because it's powered by Gatbsy.js, a static site
            generator for React applications.
          </p>
          <ExternalLink
            href="https://www.oakridgecontracting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
          </ExternalLink>
        </Project.Body>
      </Project>
      <Project>
        <Project.Img>
          <img src="" alt="Oak Ridge Contracting" />
        </Project.Img>
        <Project.Body>
          <h3>
            <ExternalLink
              href="https://www.oakridgecontracting.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Oak Ridge Contracting</span>
            </ExternalLink>
          </h3>
          <p>
            Oak Ridge Contracting is a small business in southeastern Wisconsin
            that was looking to improve their presence online. This website is
            blazing fast because it's powered by Gatbsy.js, a static site
            generator for React applications.
          </p>
          <ExternalLink
            href="https://www.oakridgecontracting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
          </ExternalLink>
        </Project.Body>
      </Project>
      <Project>
        <Project.Img>
          <img src="" alt="Oak Ridge Contracting" />
        </Project.Img>
        <Project.Body>
          <h3>
            <ExternalLink
              href="https://www.oakridgecontracting.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Oak Ridge Contracting</span>
            </ExternalLink>
          </h3>
          <p>
            Oak Ridge Contracting is a small business in southeastern Wisconsin
            that was looking to improve their presence online. This website is
            blazing fast because it's powered by Gatbsy.js, a static site
            generator for React applications.
          </p>
          <ExternalLink
            href="https://www.oakridgecontracting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
          </ExternalLink>
        </Project.Body>
      </Project>
      <Project>
        <Project.Img>
          <img src="" alt="Oak Ridge Contracting" />
        </Project.Img>
        <Project.Body>
          <h3>
            <ExternalLink
              href="https://www.oakridgecontracting.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Oak Ridge Contracting</span>
            </ExternalLink>
          </h3>
          <p>
            Oak Ridge Contracting is a small business in southeastern Wisconsin
            that was looking to improve their presence online. This website is
            blazing fast because it's powered by Gatbsy.js, a static site
            generator for React applications.
          </p>
          <ExternalLink
            href="https://www.oakridgecontracting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
          </ExternalLink>
        </Project.Body>
      </Project>
    </PortfolioGrid>
    <SignUp />
  </Layout>
)

export default WorkPage
