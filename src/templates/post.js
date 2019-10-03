import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.sanityPost
  return (
    <Layout>
      <h1>{post.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
    }
  }
`
