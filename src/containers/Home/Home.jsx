// @flow
import React from "react";
import Card from "./../../components/Card/Card";
import { HomeRow, HomeWrapper } from "./HomeStyled";

const Home = () => (
  <HomeWrapper>
    <HomeRow>
      <Card to="/gnomes" />
      <Card to="/gnomes" />
      <Card to="/gnomes" />
      <Card to="/gnomes" />
    </HomeRow>
  </HomeWrapper>
);

export default Home;
