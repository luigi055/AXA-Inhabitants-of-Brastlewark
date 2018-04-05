// @flow
import React from "react";
import ReactDOM from "react-dom";
import chai, { expect } from "chai";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./../ClientApp";

configure({ adapter: new Adapter() });
describe("Render App", () => {
  it.only("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
