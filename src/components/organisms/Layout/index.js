import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"
import { lightTheme, darkTheme } from "../../../util/theme"
import { GlobalStyle } from "../../../util/global"

import Header from "../Header"
import Footer from "../Footer"

const Container = styled.div`
  max-width: 1440px;
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
    "blog"
    "articles"
    "sign-up"
    "pagination"
    "footer";
  background: ${({ theme }) => theme.colors.mainBackground};
`

export const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <GlobalStyle />
        <Grid>
          <Header
            siteTitle={data.site.siteMetadata.title}
            toggleTheme={toggleTheme}
            initial={false}
          />
          <AnimatePresence>{children}</AnimatePresence>
          <Footer />
        </Grid>
      </Container>
    </ThemeProvider>
  )
}
