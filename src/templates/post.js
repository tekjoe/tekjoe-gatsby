import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Layout } from "../components/organisms/Layout"
import styled from "styled-components"
import SEO from "../components/seo"
import SlideLink from "../components/atoms/SlideLink"
import BlockContent from "../components/molecules/BlockContent"

const PostSection = styled.section`
  grid-area: blog;
  grid-column: 2/-2;
  margin: 4rem 0;
  width: 100%;
  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
  a {
    color: ${({ theme }) => theme.colors.linkText};
    text-decoration: none;
    background: ${({ theme }) => theme.colors.linkUnderline};
    background-size: 100% 0.35rem;
    background-repeat: no-repeat;
    background-position: left 85%;
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
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="post" />
      <PostSection>
        <h1>{frontmatter.title}</h1>
        <ByLine>
          <SlideLink to="/">{frontmatter.date}</SlideLink>
        </ByLine>
        <img src={frontmatter.thumbnail} alt="Blog post thumbnail" />
        <PostBody>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={{ width: "100%" }}
          ></div>
        </PostBody>
      </PostSection>
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
        thumbnail
      }
    }
  }
`
