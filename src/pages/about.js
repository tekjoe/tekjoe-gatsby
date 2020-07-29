import React from "react"
import styled from "styled-components"
import SEO from "../components/seo"
import { Layout } from "../components/organisms/Layout"
import Masthead from "../components/molecules/Masthead"
import SignUp from "../components/organisms/SignUp"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Portrait = styled.section`
  grid-column: 2/-2;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  max-width: 100%;
  @media (min-width: 992px) {
    grid-column: 4/-4;
  }
`

const PortraitContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    to right top,
    #18f0ae,
    #00c7c7,
    #009bcc,
    #006cb5,
    #263d83
  );
  position: relative;
  overflow: hidden;
  max-height: 600px;
`

const AboutSection = styled.section`
  grid-column: 2/-2;
  margin: 0 0 4rem 0;
  p {
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  h3 {
    font-weight: bold;
  }
  ul {
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
  ul li {
    font-size: 1.125rem;
    line-height: 1.6;
  }
  @media (min-width: 992px) {
    grid-column: 4/-4;
  }
`

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  list-style-type: none;
  margin-top: 1rem;
  padding-left: 0;
  li {
    margin: 0.5rem;
  }
`

const SkillsTag = styled.span`
  background: #f2f3f6;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.75rem;
`

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Masthead>
        <h1 style={{ textAlign: "center" }}>About Joe Ramirez</h1>
      </Masthead>
      <Portrait>
        <PortraitContainer>
          <Img fixed={data.file.childImageSharp.fixed} />
        </PortraitContainer>
      </Portrait>
      <AboutSection>
        <h2>
          I'm a web designer & developer with a penchant for solving problems
          and helping others.
        </h2>
        <p>
          Throughout my career, I've always gravitated toward web development
          and any opportunity to make the complex simple. In 2018, I decided to
          combine my passion for web development and personal development and
          started my journey as a professional web developer.
        </p>
        <p>
          Clients often approach me when they need a developer who can provide:
        </p>
        <ul>
          <li>Responsive HTML/CSS</li>
          <li>Performant websites</li>
          <li>WordPress solutions</li>
          <li>Ongoing support and maintenance</li>
        </ul>
        <p>
          The work that I provide is of the highest quality, is fully
          responsive, and is tested on a wide range of devices.
        </p>
        <h2>Skills</h2>
        <p>
          From the time I started my career as a web developer, I've worked
          tirelessly to stay on top of cutting edge web development tools and
          techniques.
        </p>
        <h3>Programming Languages I Use:</h3>
        <SkillsList>
          <li>
            <SkillsTag>HTML</SkillsTag>
          </li>
          <li>
            <SkillsTag>CSS</SkillsTag>
          </li>
          <li>
            <SkillsTag>SASS</SkillsTag>
          </li>
          <li>
            <SkillsTag>JavaScript</SkillsTag>
          </li>
          <li>
            <SkillsTag>PHP</SkillsTag>
          </li>
        </SkillsList>
        <h3>Tools I Use:</h3>
        <SkillsList>
          <li>
            <SkillsTag>git</SkillsTag>
          </li>
          <li>
            <SkillsTag>npm</SkillsTag>
          </li>
          <li>
            <SkillsTag>vscode</SkillsTag>
          </li>
          <li>
            <SkillsTag>webpack</SkillsTag>
          </li>
        </SkillsList>
        <h3>Web Frameworks I Like:</h3>
        <SkillsList>
          <li>
            <SkillsTag>React</SkillsTag>
          </li>
          <li>
            <SkillsTag>Bootstrap</SkillsTag>
          </li>
          <li>
            <SkillsTag>Express</SkillsTag>
          </li>
          <li>
            <SkillsTag>Bulma</SkillsTag>
          </li>
        </SkillsList>
      </AboutSection>
      <SignUp />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "Joe-Ramirez-Portrait.png" }) {
      childImageSharp {
        fixed(height: 600, width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
