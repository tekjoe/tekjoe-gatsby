import React, { useState } from "react"
import styled from "styled-components"

const ThemeToggler = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

ThemeToggler.Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 4rem;
  height: 2rem;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + span {
      background-color: ${({ theme }) => theme.colors.toggleBackground};
    }
    &:focus + span {
      box-shadow: 0 0 1px #2196f3;
    }
    &:checked + span:before {
      -webkit-transform: translateX(2rem);
      -ms-transform: translateX(2rem);
      transform: translateX(2rem);
      background-color: ${({ theme }) => theme.colors.fontColor};
    }
  }
`

ThemeToggler.Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.toggleBackground};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 1rem;
  &:before {
    position: absolute;
    content: "";
    height: 1.5rem;
    width: 1.5rem;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.colors.toggleColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 1rem;
  }
`

export default ({ toggleTheme }) => {
  const [checked, setChecked] = useState(true)
  const handleClick = () => {
    setChecked(!checked)
  }
  return (
    <ThemeToggler>
      <ThemeToggler.Switch htmlFor="themeToggler">
        <input
          id="themeToggler"
          type="checkbox"
          onChange={toggleTheme}
          checked={checked}
          onClick={handleClick}
        />
        <ThemeToggler.Slider />
      </ThemeToggler.Switch>
    </ThemeToggler>
  )
}
