// @flow
import React from "react";
import SubHeading from "./SubTitleStyled";

type Props = {
  text: string
};
const SubTitle = ({ text }: Props) => (
  <SubHeading>
    <hr />
    <h2>{text}</h2>
  </SubHeading>
);

export default SubTitle;
