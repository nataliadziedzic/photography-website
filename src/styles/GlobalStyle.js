import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    color: white;
    outline: none;
}
body{
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    background-color: #20332d;
}
#root {
  height: 100%;
  width: 100%;
}
`

export default GlobalStyle