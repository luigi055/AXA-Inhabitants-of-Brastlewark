// @flow
import React from "react";
import { hot } from "react-hot-loader";
import { ThemeProvider } from "styled-components";
import theme from "./MainTheme";
import Main from "./containers/Main";

/* eslint-disable */
import "./favicon.ico";
/* eslint-enable */

const App = () => (
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>
);

export default hot(module)(App);
