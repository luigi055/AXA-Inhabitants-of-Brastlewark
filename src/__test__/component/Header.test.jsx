import React from "react";
import { shallow } from "enzyme";
import Header from "./../../containers/Header/Header";
import { Link } from "react-router-dom";

// Testing Header for get acquainted with Enzyme
// Having some problems with jest since it can't process
// Images i have to improve the configuration
describe("Test Header", () => {
  it("should render Header correctly", () => {
    const Wrapper = shallow(<Header />);
    expect(Wrapper).toMatchSnapshot();
  });

  it("should render Header with Head Link BrastlewarkerS", () => {
    const Wrapper = shallow(<Header to="/" href="/" />);
    expect(
      Wrapper.containsMatchingElement(
        <Link to="/" href="/">
          BrastlewarkerS
        </Link>
      )
    ).toBe(true);
  });
});
