// @flow
import styled from "styled-components";

export const DetailsWrapper = styled.main`
  border-radius: 5px;
  margin: 10px auto;
  max-width: 900px;

  @media (max-width: 990px) {
    max-width: 610px;
  }
`;

export const DetailsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 15px;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 630px) {
    justify-content: flex-start;
  }
`;
