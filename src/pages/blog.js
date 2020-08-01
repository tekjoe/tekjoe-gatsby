import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/organisms/Layout"
import SEO from "../components/seo"
import SignUp from "../components/organisms/SignUp"

import ArticlesSection from "../components/organisms/ArticlesSection"

const BlogPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Blog" />
      <ArticlesSection articles={articles} />
      <SignUp />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
            thumbnail
          }
          id
        }
      }
    }
  }
`
