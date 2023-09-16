import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: BIZUDPMincho;
    src: url(src/assets/font/BIZUDPMincho-Regular.ttf);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: BIZUDPMincho, sans-serif;
    color: ${({ theme }) => theme.mercury};
    background-color: ${({ theme }) => theme.pickled_blue_wood};
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
  pickled_blue_wood: '#2F464F',
  black: '#000000',
  green: '#77f779',
  red: '#f52727',
}
