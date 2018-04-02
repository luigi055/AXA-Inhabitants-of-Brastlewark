// @flow
import React from "react";
import { hot } from "react-hot-loader";

/* eslint-disable */
import "./favicon.ico";
/* eslint-enable */

import "./App.scss";

import Main from "./containers/Main";

const App = () => (
    <Main />
);

export default hot(module)(App);
