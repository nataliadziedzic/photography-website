import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle from "./styles/GlobalStyle"
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    mainBackground: "#20332d",
    fontHover: "#8e6e35",
    buttonBackground: "#202633",
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
