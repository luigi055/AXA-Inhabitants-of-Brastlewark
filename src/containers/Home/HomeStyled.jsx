// @flow
import styled from "styled-components";

export const FormSearch = styled.form`
  display: block;
  width: 100%;
`;

export const HomeWrapper = styled.main`
  margin: 10px auto;
  max-width: 900px;
  position: relative;

  @media (max-width: 990px) {
    max-width: 610px;
  }
`;

export const FormRow = HomeWrapper.withComponent("div").extend`
  background: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  width: 100%;
`;

export const HomeRow = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  padding: 10px 15px;
  width: 100%;

  @media (min-width: 630px) {
    justify-content: flex-start;
  }
`;
