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

export default ({ data }) => {
  const post = data.sanityPost
  return (
    <Layout>
      <SEO title={post.title} />
      <PostSection>
        <h1>{post.title}</h1>
        <ByLine>
          <SlideLink to="/">{post.author.name}</SlideLink>
        </ByLine>

        {post.mainImage ? (
          <StyledImage fluid={post.mainImage.asset.fluid} />
        ) : null}

        <PostBody>
          <BlockContent blocks={post._rawBody} />
        </PostBody>
      </PostSection>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityPost(id: { eq: $id }) {
      title
      _rawBody
      author {
        name
      }
      publishedAt(formatString: "MMMM D, YYYY")
      mainImage {
        asset {
          fluid(maxWidth: 900) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
