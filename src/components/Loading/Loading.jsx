// @flow
import React from "react";
import { LoadingStyled, Logo } from "./LoadingStyled";

const Loading = () => (
  <LoadingStyled>
    <div className="box">
      <Logo />
      <h1>BrastlewarkerS</h1>
      <span>Loading...</span>
    </div>
  </LoadingStyled>
);

export default Loading;
