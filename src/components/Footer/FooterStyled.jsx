// @flow
import styled from "styled-components";

const Footer = styled.footer`
  background: ${({ theme }) => theme.darkColor};
  color: ${({ theme }) => theme.lightColor};
  display: bloc;
  font-size: 1.1rem;
  padding: 30px 0;
  text-align: center;
  width: 100%;

  a {
    color: ${({ theme }) => theme.lightColor};
    &:hover {
      color: ${({ theme }) => theme.mainColor};
    }
  }
`;

export default Footer;
