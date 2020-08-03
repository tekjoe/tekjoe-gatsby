import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import MenuTrigger from "../../atoms/MenuTrigger"

const MenuTriggerMobile = styled(MenuTrigger)`
  position: absolute;
  top: 3rem;
  right: 1rem;
`

const MobileNavigation = styled(motion.nav)`
  background: ${({ theme }) => theme.colors.subtitleColor};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  right: 0;
  top: 0;
  z-index: 1001;
  p {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

const NavMenu = styled(motion.ul)`
  list-style-type: none;
  text-align: center;
  li {
    font-size: 2rem;
    font-weight: bold;
  }
`

NavMenu.Link = styled(Link)`
  color: ${({ theme }) => theme.colors.fontColor};
  text-decoration: none;
`

const variants = {
  open: {
    width: "100vw",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.05,
      staggerChildren: 0.06,
      delayChildren: 0.2,
      staggerDirection: 1,
    },
  },
  closed: {
    width: "0",
    opacity: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.05,
      staggerChildren: 0.06,
      delayChildren: 0.1,
      staggerDirection: 1,
    },
  },
}

const listItem = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <MobileNavigation
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      initial={false}
    >
      <MenuTriggerMobile toggleMenu={toggleMenu} />
      <NavMenu>
        <motion.li variants={listItem}>
          <NavMenu.Link to="/">Home</NavMenu.Link>
        </motion.li>
        <motion.li variants={listItem}>
          <NavMenu.Link to="/about">About</NavMenu.Link>
        </motion.li>
        <motion.li variants={listItem}>
          <NavMenu.Link to="/work">Work</NavMenu.Link>
        </motion.li>
        <motion.li variants={listItem}>
          <NavMenu.Link to="/blog">Blog</NavMenu.Link>
        </motion.li>
        <motion.li variants={listItem}>
          <NavMenu.Link to="/contact">Contact</NavMenu.Link>
        </motion.li>
      </NavMenu>
    </MobileNavigation>
  )
}

export default MobileNav
