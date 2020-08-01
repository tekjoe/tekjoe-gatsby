import React from "react"
import styled from "styled-components"
import SlideLink from "../../atoms/SlideLink"
import Badge from "../../atoms/Badge"

const Article = styled.article`
  grid-column: 1/-1;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  p {
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    margin: 1.25rem auto 0.5rem auto;
  }
  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
  @media (min-width: 992px) {
    grid-column: span 6;
    margin: 0;
    padding: 0;
  }
`

Article.Image = styled.img`
  margin-bottom: 1rem;
  display: block;
  width: 100%;
  height: 100%;
`

const CategoryList = styled.div`
  margin: 0.5rem 0;
`

export default ({ article }) => {
  const blogPost = article.node.frontmatter
  console.log(article)
  return (
    <Article>
      <Article.Image src={blogPost.thumbnail} />
      <SlideLink fontSize="h4" to={`/${blogPost.slug}`}>
        {blogPost.title}
      </SlideLink>
      {/* <CategoryList>
        {article.node.categories.map(category => (
          <Badge>{category.title}</Badge>
        ))}
      </CategoryList> */}
      <p style={{ fontSize: "1.125rem" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit
        reiciendis, incidunt eum ipsa in reprehenderit architecto recusandae.
      </p>
      <SlideLink fontSize="h6" to={`/${blogPost.slug}`}>
        Read more
      </SlideLink>
    </Article>
  )
}
