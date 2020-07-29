import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/organisms/Layout"
import SEO from "../components/seo"
import SignUp from "../components/organisms/SignUp"

import ArticlesSection from "../components/organisms/ArticlesSection"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
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

export default BlogPage
