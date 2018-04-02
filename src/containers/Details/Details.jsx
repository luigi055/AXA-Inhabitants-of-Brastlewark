// @flow
import React from "react";
import DetailsInfo from "./../../components/DetailsInfo/DetailsInfo";
import Card from "./../../components/Card/Card";
import SubTitle from "./../../components/SubTitle/SubTitle";
import { DetailsRow, DetailsWrapper } from "./DetailsStyled";

const Details = () => (
  <DetailsWrapper>
    <DetailsRow>
      <DetailsInfo />
    </DetailsRow>
    <DetailsRow>
      <SubTitle text="Friends" />
      <Card to="/gnomes" />
    </DetailsRow>
  </DetailsWrapper>
);

export default Details;
