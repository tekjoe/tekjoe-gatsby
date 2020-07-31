import React from "react"
import styled from "styled-components"
import Article from "../Article"
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
    margin: 4rem 0 8rem 0;
  }
`

ArticleSection.Intro = styled.div`
  grid-column: 1/-1;
  margin-bottom: 4rem;
  h2 {
    font-size: 2.25rem;
    line-height: 1.25;
    margin-top: 2rem;
    margin-bottom: 1.125rem;
  }
  a {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    padding: 4rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 992px) {
    grid-column: 3 /-3;
    padding: 0;
  }
  @media (min-width: 1200px) {
  }
`

ArticleSection.Intro.Subtitle = styled.h3`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.subtitleColor};
  font-size: ${({ theme }) => theme.typography.h6};
`

export default ({ articles }) => {
  return (
    <ArticleSection>
      <ArticleSection.Intro>
        <ArticleSection.Intro.Subtitle>
          Latest articles –
        </ArticleSection.Intro.Subtitle>
        <h2>
          My musings on web development, freelancing, productivity, movies,
          tech, and more.
        </h2>
        <SlideLink fontSize="h6" to="/blog">
          Read more on my blog
        </SlideLink>
      </ArticleSection.Intro>
      {articles.map(article => (
        <Article article={article} key={article.node._id} />
      ))}
    </ArticleSection>
  )
}
