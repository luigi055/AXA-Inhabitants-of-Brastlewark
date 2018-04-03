import styled from "styled-components";

const OrderButton = styled.button`
  background: ${({ active, theme }) => (active ? theme.hoverColor : "inherit")};
  border: 1px solid
    ${({ active, theme }) => (active ? theme.hoverColor : "#ccc")};
  box-sizing: border-box;
  color: ${({ active, theme }) => (active ? theme.hoverFontColor : "#666")};
  cursor: pointer;
  font-family: Helvetica, sans-serif;
  font-size: 0.975rem;
  font-weight: bold;
  max-width: ${({ maxWidth }) => maxWidth};
  padding: 20px 15px;
  outline-color: transparent;
  width: ${({ width }) => width || "50%"};

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.hoverColor : "#fcfcfc"};
  }

  @media screen and (min-width: 630px) {
    width: ${({ width }) => width || "33.333333%"};
  }
  @media screen and (min-width: 990px) {
    width: ${({ highScreenWidth }) => highScreenWidth || "25%"};
  }
`;

export default OrderButton;
