// @flow
import React from "react";
import { Helmet } from "react-helmet";
import { LoadingStyled, Logo } from "./LoadingStyled";

const Loading = () => (
  <LoadingStyled>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>BrastlewarkerS</title>
      <link rel="shortcut icon" href="favicon.ico" />
    </Helmet>
    <div className="box">
      <Logo />
      <h1>BrastlewarkerS</h1>
      <span>Loading...</span>
    </div>
  </LoadingStyled>
);

export default Loading;
