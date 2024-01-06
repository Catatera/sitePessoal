import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import GlobalStyle from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <ThemeProvider theme={dark}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
