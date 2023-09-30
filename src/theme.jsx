import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: BIZUDPMincho;
    src: url(./font/BIZUDPMincho-Regular.ttf);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: BIZUDPMincho, sans-serif;
    text-rendering: optimizeLegibility;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  #root {
    width: 100%;
    height: 100%;
    white-space: pre-line; /* This command allow you to use escape character */
  }
`

export const Palette = {
  mine_shaft: '#242424',
  mercury: '#e3e3e3',
  pickled_blue_wood: '#0d2b37',
  black: '#000000',
  white: '#ffffff',
  green: '#77f779',
  red: '#f52727',
  dark_green: '#073400',
  brown: '#6D4200',
}
