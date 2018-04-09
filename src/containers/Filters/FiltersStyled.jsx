// @flow
import styled from "styled-components";
import { HomeWrapper } from "./../Home/HomeStyled";

export const FormSearch = styled.div`
  display: block;
  width: 100%;
`;

export const FormRow = HomeWrapper.withComponent("div").extend`
  background: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  width: 100%;
`;
