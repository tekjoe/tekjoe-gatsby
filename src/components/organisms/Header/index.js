import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import SlideLink from "../../atoms/SlideLink"
import ThemeToggler from "../../molecules/ThemeToggler"

const DesktopHeader = styled.header`
  grid-area: header;
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 3rem;
  font-size: 1.25rem;
  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`

const Navigation = styled.nav`
  display: flex;
`

const NavigationMenu = styled.ul`
  display: none;
  list-style-type: none;
  @media (min-width: 768px) {
    display: flex;
    li {
      margin: 0 1rem;
    }
  }
  @media (min-width: 992px) {
    li {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
  @media (min-width: 1200px) {
  }
`

const Header = ({ siteTitle, toggleTheme }) => (
  <DesktopHeader>
    <div>
      <SlideLink to="/">&lt;{siteTitle}/&gt;</SlideLink>
    </div>
    <Navigation>
      <NavigationMenu>
        <li>
          <SlideLink to="/about">About</SlideLink>
        </li>
        <li>
          <SlideLink to="/">Work</SlideLink>
        </li>
        <li>
          <SlideLink to="/contact">Contact</SlideLink>
        </li>
        <li>
          <SlideLink to="/blog">Blog</SlideLink>
        </li>
      </NavigationMenu>
      <ThemeToggler toggleTheme={toggleTheme} />
    </Navigation>
  </DesktopHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
