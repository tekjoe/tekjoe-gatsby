import React from "react"
import styled from "styled-components"
import SlideLink from "../../atoms/SlideLink"

const ArticleSection = styled.section`
  grid-area: articles;
  grid-column: 1 / -1;
  margin: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  @media (min-width: 992px) {
    grid-column: 2 /-2;
    grid-gap: 3rem;
    margin: 4rem 2rem;
  }
`

const ArticlesIntro = styled.div`
  grid-column: 1/-1;
  margin-bottom: 4rem;
  h2 {
    font-size: 2.25rem;
    line-height: 1.25;
    margin-top: 2rem;
    margin-bottom: 1.125rem;
  }
  a {
    font-size: 1.5;
  }
  @media (min-width: 768px) {
    padding: 4rem;
    margin: 0;
  }
  @media (min-width: 992px) {
    grid-column: 3 /-3;
    padding: 0;
  }
`

const Article = styled.article`
  grid-column: 1/-1;
  margin-bottom: 2rem;
  p {
    line-height: 1.65;
    margin-bottom: 1.25rem;
  }
  .link {
    margin-bottom: 1.25rem;
  }
  h2 {
    font-size: 2rem;
    margin: 1.25rem auto 0.5rem auto;
  }
  h2 a {
    color: #001f3f;
    &:hover {
      color: #4666c9;
    }
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

const ArticleSubtitle = styled.h3`
  font-weight: 300;
  color: #4666c9;
`

export default ({ articles }) => {
  return (
    <ArticleSection>
      <ArticlesIntro>
        <ArticleSubtitle>Latest articles –</ArticleSubtitle>
        <h2>
          My musings on web development, freelancing, productivity, movies,
          tech, and more.
        </h2>
        <SlideLink to="/">Read more on my blog</SlideLink>
      </ArticlesIntro>
      {articles.map(article => (
        <Article>
          {article.node.categories.map(category => (
            <span>{category.title}</span>
          ))}
          <h2>{article.node.title}</h2>
          <SlideLink to={`/blog/${article.node.slug.current}`}>
            Read more
          </SlideLink>
        </Article>
      ))}
    </ArticleSection>
  )
}
