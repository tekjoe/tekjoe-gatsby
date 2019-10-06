import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Masthead from "../components/masthead"
import SEO from "../components/seo"
import CallToAction from "../components/CallToAction"
import SignUp from "../components/SignUp"

import SlideLink from "../components/atoms/SlideLink"
import ArticlesSection from "../components/molecules/ArticlesSection"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Masthead>
      <h1>
        Hey there! I'm <SlideLink to="/">Joe Ramirez</SlideLink>, a designer,
        developer, and all-around fan of all things web.
      </h1>
      <h2>
        <SlideLink to="/">More about me</SlideLink>
      </h2>
    </Masthead>
    <CallToAction />
    <ArticlesSection articles={data.allSanityPost.edges} />
    <SignUp />
  </Layout>
)

export const query = graphql`
  query {
    allSanityPost {
      edges {
        node {
          categories {
            title
          }
          slug {
            current
          }
          title
        }
      }
    }
  }
`

export default IndexPage
