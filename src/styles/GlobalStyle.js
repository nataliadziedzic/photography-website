import { createGlobalStyle } from "styled-components"
const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    color: white;
    outline: none;
    text-shadow: 1px 1px black;
    letter-spacing: 1px;
}
a{
  text-decoration: none;
}
img{
  height: auto;
  cursor: pointer;
}
button{
  background-color: transparent;
  cursor: pointer;
  border: 1px solid white;
  font-size: 18px;
}
html{
  scroll-behavior: smooth;
}
body{
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    background-color: ${props => props.theme.colors.mainBackground};
    overflow-x: hidden;
}
#root {
  height: 100%;
  width: 100%;
}
`

export default GlobalStyle