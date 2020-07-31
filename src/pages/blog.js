import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/organisms/Layout"
import SEO from "../components/seo"
import SignUp from "../components/organisms/SignUp"

import ArticlesSection from "../components/organisms/ArticlesSection"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    {/* <ArticlesSection articles={data.allSanityPost.edges} /> */}
    <SignUp />
  </Layout>
)

export default BlogPage
