import { createGlobalStyle } from "styled-components"
import theme from "./theme.yaml"
import device from "./device"

const { colors, font, fontSize } = theme

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-color: ${colors.dark};
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    color: ${colors.light};
    font-family: ${font.openSans};
    font-size: ${fontSize.md};
    ${device.tablet`font-size: ${fontSize.sm};`};
    font-weight: 400;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${colors.darkPink};
    font-weight: 600;
  }
`

export default GlobalStyles
