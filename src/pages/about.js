import React from "react"
import styled, { keyframes } from "styled-components"
import SEO from "../components/seo"
import { Layout } from "../components/organisms/Layout"
import Masthead from "../components/molecules/Masthead"
import SignUp from "../components/organisms/SignUp"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const Portrait = styled.section`
  grid-column: 3/-3;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  max-width: 100%;
  @media (min-width: 768px) {
    grid-column: 4/-4;
    margin-bottom: 4rem;
  }
  @media (min-width: 992px) {
    grid-column: 5/-5;
    margin-bottom: 5rem;
  }
`
const animateDarkMode = keyframes`
  0% {
    box-shadow: -1rem 1rem #9dadbc4D, 1rem 1rem #6a79874D, 0 -1rem #6f869b4D;
  } 
  50% {
    box-shadow: 1rem -1rem #9dadbc4D, -1rem -1rem #6a79874D, 0 1rem #6f869b4D;
  } 
  100% {
    box-shadow: -1rem 1rem #9dadbc4D, 1rem 1rem #6a79874D, 0 -1rem #6f869b4D;
  }
`
const animateLightMode = keyframes`
  0% {
    box-shadow: -1rem 1rem #ff54584D, 1rem 1rem #ffc1bd4D, 0 -1rem #ffd1234D;
  } 
  50% {
    box-shadow: 1rem -1rem #ff54584D, -1rem -1rem #ffc1bd4D, 0 1rem #ffd1234D;
  } 
  100% {
    box-shadow: -1rem 1rem #ff54584D, 1rem 1rem #ffc1bd4D, 0 -1rem #ffd1234D;
  }
`

const PortraitContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: ${({ theme }) => theme.colors.gradientTopRight};
  position: relative;
  overflow: hidden;
  height: 100%;
  flex: 1;
  border-radius: 50%;
  animation: ${({ theme }) =>
      theme.theme === "dark" ? animateDarkMode : animateLightMode}
    4s infinite ease-in-out;
`

const AboutSection = styled.section`
  grid-column: 2/-2;
  margin: 0 0 4rem 0;
  p {
    margin-bottom: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.typography.h3};
  }

  ul {
    margin-bottom: 1rem;
    list-style-position: inside;
  }
  ul li {
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
    &:not(:last-of-type) {
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`

const SkillsTag = styled.span`
  background: ${({ theme }) => theme.colors.background};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.9rem;
  display: block;
`

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Masthead style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "1rem",
            fontSize: "3rem",
          }}
        >
          Hey, I'm Joe Ramirez.
        </h1>
        <p style={{ textAlign: "center", fontSize: "1.25rem" }}>
          I'm a freelance web developer from Milwaukee, WI.
        </p>
      </Masthead>
      <Portrait>
        <PortraitContainer>
          <Img
            fluid={data.file.childImageSharp.fluid}
            imgStyle={{ height: "100%" }}
            style={{ flex: 1 }}
          />
        </PortraitContainer>
      </Portrait>
      <AboutSection>
        <h2>More About Me</h2>
        <p>
          I'm a web designer & developer with a penchant for solving problems
          and helping others. In 2018, I decided to combine my passion for web
          development and creativity and started my journey as a professional
          web developer.
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
        <h4>Programming Languages I Use:</h4>
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
        <h4>Tools I Use:</h4>
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
        <h4>Web Frameworks I Like:</h4>
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
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
