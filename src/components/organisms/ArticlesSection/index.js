import React from "react"
import styled from "styled-components"
import SlideLink from "../../atoms/SlideLink"
import Article from "../Article"

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
    margin-bottom: 2rem;
  }
  @media (min-width: 992px) {
    grid-column: 3 /-3;
    padding: 0;
  }
`

const ArticleSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.h6};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.mediumBlue};
`
const Title = styled.p`
  font-size: ${({ theme }) => theme.typography.h4};
  margin-bottom: 1.125rem;
  line-height: 1.3;
`

export default ({ articles }) => {
  return (
    <ArticleSection>
      <ArticlesIntro>
        <ArticleSubtitle>Latest articles –</ArticleSubtitle>
        <Title>
          My musings on web development, freelancing, productivity, movies,
          tech, and more.
        </Title>

        <SlideLink fontSize="h5" to="/">
          Read more on my blog
        </SlideLink>
      </ArticlesIntro>
      {articles.map(article => (
        <Article article={article} />
      ))}
    </ArticleSection>
  )
}
