import styled from "styled-components";

const SelectComponent = styled.label`
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  color: ${({ theme }) => theme.suggestionsTXT};
  display: block;
  font-size: 1.1rem;
  margin: 0px 0px 5px;
  text-align: center;
  width: ${props => (props.maxWidth ? props.maxWidth : "100%")};

  & select {
    appearance: none;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    color: #aaa;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: bold;
    height: 40px;
    line-height: 15px;
    padding: 0 15px;
    outline: 0;
    outline-color: transparent;
    text-align: center;
    text-indent: 0.01px;
    text-transform: uppercase;
    text-overflow: "";
    width: 100%;

    option {
      color: ${({ theme }) => theme.suggestionsTXT} !important;
    }
  }
  @media (min-width: 400px) {
    font-size: 1.2rem;
    & span {
      font-size: 1rem;
    }
  }
`;

export default SelectComponent;
