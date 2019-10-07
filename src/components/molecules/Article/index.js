import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import SlideLink from "../../atoms/SlideLink"
import Badge from "../../atoms/Badge"

const Article = styled.article`
  grid-column: 1/-1;
  margin-bottom: 2rem;
  p {
    line-height: 1.65;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    margin: 1.25rem auto 0.5rem auto;
  }
  img {
    margin-bottom: 0;
    max-width: 100%;
    background: #4666c9;
  }
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
  @media (min-width: 992px) {
    grid-column: span 4;
    margin: 0;
    padding: 0;
  }
`

const StyledImage = styled(Img)`
  width: 100%;
  margin-bottom: 1rem;
`

export default ({ article }) => {
  return (
    <Article>
      {article.node.categories.map(category => (
        <Badge>{category.title}</Badge>
      ))}
      <h2>
        <SlideLink to={`/blog/${article.node.slug.current}`}>
          {article.node.title}
        </SlideLink>
      </h2>
      <StyledImage fluid={article.node.mainImage.asset.fluid} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit
        reiciendis, incidunt eum ipsa in reprehenderit architecto recusandae.
      </p>
      <h3>
        <SlideLink to={`/blog/${article.node.slug.current}`}>
          Read more
        </SlideLink>
      </h3>
    </Article>
  )
}
