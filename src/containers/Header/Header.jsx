// @flow
import React from "react";
import { Link } from "react-router-dom";
import HeaderComponent from "./HeaderStyled";

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
