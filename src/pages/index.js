import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/organisms/Layout"
import Masthead from "../components/molecules/Masthead"
import SEO from "../components/seo"
import CTASection from "../components/organisms/CTASection"
import SignUp from "../components/organisms/SignUp"

import SlideLink from "../components/atoms/SlideLink"
import ArticlesSection from "../components/organisms/ArticlesSection"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Masthead>
      <h4 style={{ marginBottom: "1rem" }}>
        Hey there! I'm <SlideLink to="/">Joe Ramirez</SlideLink>, a designer,
        developer, and all-around fan of all things web.
      </h4>
      <SlideLink fontSize="h5" to="/about">
        More about me
      </SlideLink>
    </Masthead>
    <CTASection />
    <ArticlesSection articles={data.allSanityPost.edges} />
    <SignUp />
  </Layout>
)

export const query = graphql`
  query {
    allSanityPost(limit: 2) {
      edges {
        node {
          categories {
            title
          }
          slug {
            current
          }
          title
          _id
          mainImage {
            asset {
              fluid(maxWidth: 900, maxHeight: 400) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
