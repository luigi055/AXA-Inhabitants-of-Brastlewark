// @flow
import styled from "styled-components";

export const ContainerInput = styled.label`
  box-sizing: border-box;
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  width: ${props => props.maxWidth};

  & > span {
    display: ${props => (props.showLabel ? "block" : "none")};
  }
`;

export const InputSearch = styled.input`
  border: 1px solid #ccc;
  border-radius: ${props => (props.open ? "5px 5px 0 0" : "5px")};
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
  padding: 10px 15px;
  outline-color: transparent;
  width: 100%;
`;
