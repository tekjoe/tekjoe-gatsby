import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  *:focus {
    outline: 2px dotted ${({ theme }) => theme.colors.darkBlue};
  }
  body {
    font-size: 1rem;
    font-family: ${({ theme }) => theme.typography.bodyFont};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.fontColor}; 
    transition-property: background, color;
    transition-duration: 0.25s;
    transition-timing-function: linear;
  };
  p {
    font-size: ${({ theme }) => theme.typography.paragraph};
    line-height: 1.6;
    margin-bottom: 1.25rem;
    @media (min-width: 1024px) {
      font-size: 1.125rem;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.titleFont};
    font-weight: 500;
  }
  h1 {
    font-size: ${({ theme }) => theme.typography.h1};
  }
  h2 {
    font-size: ${({ theme }) => theme.typography.h2};
  }
  h3 {
    font-size: ${({ theme }) => theme.typography.h3};
  }
  h4 {
    font-size: ${({ theme }) => theme.typography.h4};}

  h5 {
    font-size: ${({ theme }) => theme.typography.h5};
  }
  h6 {
    font-size: ${({ theme }) => theme.typography.h6};
  }
`
