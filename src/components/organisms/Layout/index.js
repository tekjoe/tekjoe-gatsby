import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"

const theme = {
  colors: {
    darkBlue: "#263d83",
    mediumBlue: "#4666c9",
    lightBlue: "#95a7e0",
    mintGreen: "#18f0ae",
  },
  typography: {
    small: "0.8rem",
    paragraph: "1rem",
    h6: "1.25rem",
    h5: "1.563rem",
    h4: "1.953rem",
    h3: "2.441rem",
    h2: "3.052rem",
    h1: "3.815rem",
  },
  color: "#001f3f",
}

const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  body {
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: #f7f9fe;
    color: #001f3f; 
  };
  p {
    font-size: ${theme.typography.paragraph};
    line-height: 1.6;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }
  h1 {
    font-size: ${theme.typography.h1}
  }
  h2 {
    font-size: ${theme.typography.h2}
  }
  h3 {
    font-size: ${theme.typography.h3}
  }
  h4 {
    font-size: ${theme.typography.h4}
  }
  h5 {
    font-size: ${theme.typography.h5}
  }
  h6 {
    font-size: ${theme.typography.h6}
  }
`

const Container = styled.div`
  max-width: 1440px;
  background: white;
  @media (min-width: 768px) {
    max-width: 720px;
    margin: 3rem auto;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1440px;
  }
`

const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(1rem, max-content);
  grid-template-areas:
    "header"
    "masthead"
    "cta"
    "articles"
    "sign-up"
    "pagination"
    "footer";
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Grid>
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer />
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
