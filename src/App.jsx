// @flow
import React from "react";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader";
import { ThemeProvider } from "styled-components";
import configure from "./redux/store/configureStore";
import theme from "./MainTheme";
import Main from "./containers/Main";

/* eslint-disable */
import "./favicon.ico";
/* eslint-enable */

// Get the Redux storage and connect it to our application
// Now every component can connect to the redux state container
const store = configure();

// ThemeProvider pass the default variables for our styled components theme
const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </Provider>
);

export default hot(module)(App);
