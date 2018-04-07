import React from "react";
import { render } from "react-dom";
import App from "./App";

// Render the entire application in <div class="app"></div>
// This file is just for Frontend rendering in the index.html
const renderApp = () => {
  render(<App />, document.getElementById("app"));
};

renderApp();
