import React from "react"
import styled from "styled-components"

const MenuButton = styled.button`
  background: none;
  border: none;
  svg {
    height: 2rem;
    width: 2rem;
    position: absolute;
    top: 3rem;
    right: 2rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

const MenuSVG = styled.svg`
  fill: ${({ theme }) => theme.colors.fontColor};
`

export default ({ toggleMenu }) => {
  return (
    <MenuButton onClick={toggleMenu}>
      <MenuSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </MenuSVG>
    </MenuButton>
  )
}
