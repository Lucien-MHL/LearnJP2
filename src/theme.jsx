import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    src: url(./assets/font/NotoSerifJP.otf);
    font-family: 'Noto Serif JP', sans-serif;
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
