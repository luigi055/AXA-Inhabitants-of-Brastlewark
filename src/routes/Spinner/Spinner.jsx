// @flow
import React from "react";
import { Loading, Image } from "./SpinnerStyled";
import spinner from "./spinner.gif";
import loadingIMG from "./../../img/gnome-loading.png";

const Spinner = () => (
  <Loading>
    <Image
      width="auto"
      height="80px"
      top="20px"
      src={loadingIMG}
      alt="loading Logo"
    />
    <Image width="200px" src={spinner} alt="loading indicator" />
  </Loading>
);

export default Spinner;
