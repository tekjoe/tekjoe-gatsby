import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Layout } from "../components/organisms/Layout"
import styled from "styled-components"
import SEO from "../components/seo"
import SlideLink from "../components/atoms/SlideLink"
import BlockContent from "../components/molecules/BlockContent"

const PostSection = styled.section`
  grid-column: 2/-2;
  margin: 4rem 0;
  h1 {
    font-size: 3rem;
  }
  @media (min-width: 1200px) {
    grid-column: 4/-4;
  }
`

const ByLine = styled.div`
  margin-bottom: 2rem;
`

const PostBody = styled.article`
  p {
    margin-bottom: 1rem;
  }
`

const StyledImage = styled(Img)`
  width: 100%;
  margin-bottom: 2rem;
`

export default function Template({ data }) {
  const { markdownRemark } = data
  return (
    <Layout>
      <SEO title="post" />
      {/* <PostSection>
        <h1>{post.title}</h1>
        <ByLine>
          <SlideLink to="/">{post.author.name}</SlideLink>
        </ByLine>
        <PostBody>
          <BlockContent blocks={post._rawBody} />
        </PostBody>
      </PostSection> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
