import React from "react"
import styled from "styled-components"
import { Layout } from "../components/organisms/Layout"
import Masthead from "../components/molecules/Masthead"
import ExternalLink from "../components/atoms/ExternalLink"
import SEO from "../components/seo"
import SignUp from "../components/organisms/SignUp"
import apartment from "../images/apartment.svg"
import wedding from "../images/wedding.svg"
import hamburger from "../images/hamburger.svg"
import misinformation from "../images/misinformation.svg"
import medicine from "../images/medicine.svg"
import coffee from "../images/coffee.svg"

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
  display: flex;
  img {
    display: block;
    max-width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0 auto;
    flex: 1;
  }
  @media (min-width: 1200px) {
    height: 400px;
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
          <img src={apartment} alt="Oak Ridge Contracting" />
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
          <img src={wedding} alt="Lee's Classic Cars" />
        </Project.Img>
        <Project.Body>
          <h3>
            <ExternalLink
              href="https://www.leesclassiccarswi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Lee's Classic Cars</span>
            </ExternalLink>
          </h3>
          <p>
            Lee's Classic Cars is a classic car wedding experience that needed
            the ability to book car reservations on their site. This project is
            powered by WordPress, WooCommerce, and PayPal.
          </p>
          <ExternalLink
            href="https://www.leesclassiccarswi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
          </ExternalLink>
        </Project.Body>
      </Project>
      <Project>
        <Project.Img>
          <img src={hamburger} alt="Birch + Butcher" />
        </Project.Img>
        <Project.Body>
          <h3>
            <ExternalLink
              href="https://www.birchandbutcher.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Birch + Butcher</span>
            </ExternalLink>
          </h3>
          <p>
            Birch + Butcher, one of Milwaukee's best dining experiences, needed
            a website that was easy to maintain and easy to look at. This
            project includes an interactive map featuring nearby attractions, an
            embedded Instagram feed, and an easy to update menu section.
          </p>
          <ExternalLink
            href="https://www.birchandbutcher.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
          </ExternalLink>
        </Project.Body>
      </Project>
      <Project>
        <Project.Img>
          <img src={misinformation} alt="Hogwash App" />
        </Project.Img>
        <Project.Body>
          <h3>
            <ExternalLink
              href="http://hogwash.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Hogwash Misinformation App</span>
            </ExternalLink>
          </h3>
          <p>
            In a post-truth world, misinformation reigns supreme. Prove your
            loved ones wrong with Hogwash – a simple tool for debunking fake
            news and misinformation you read online.
          </p>
          <ExternalLink
            href="http://hogwash.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
          </ExternalLink>
        </Project.Body>
      </Project>
      <Project>
        <Project.Img>
          <img src={medicine} alt="COVID-19 Dashboard" />
        </Project.Img>
        <Project.Body>
          <h3>
            <ExternalLink
              href="http://joevid-19.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>COVID-19 Dashboard</span>
            </ExternalLink>
          </h3>
          <p>
            Experiencing information overload? Reduce your COVID-19 anxiety with
            JOEVID-19 and keep your mind quaran-toned. Credit to the Covid
            Tracking Project API.
          </p>
          <ExternalLink
            href="http://joevid-19.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
          </ExternalLink>
        </Project.Body>
      </Project>
      <Project>
        <Project.Img>
          <img src={coffee} alt="React Coffee Logger Project" />
        </Project.Img>
        <Project.Body>
          <h3>
            <ExternalLink
              href="http://coffee-logger.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>React Coffee Logger</span>
            </ExternalLink>
          </h3>
          <p>
            This web application was developed with React, Redux, and Firebase.
            The goal of the project was to implement user authentication and
            persistent data with Google Firebase.
          </p>
          <ExternalLink
            href="http://coffee-logger.herokuapp.com/"
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
