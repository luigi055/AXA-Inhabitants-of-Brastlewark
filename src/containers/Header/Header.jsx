// @flow
import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "./HeaderStyled";

// Simple Header component
// Link is a react-router-dom component used as an anchor tag for routing
const Header = () => (
  <HeaderComponent>
    <div className="row">
      <h1>
        <Link to="/" href="/">
          BrastlewarkerS
        </Link>
      </h1>
    </div>
  </HeaderComponent>
);

export default Header;
