// @flow
import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  className: string,
  to: string,
  children: React.Node
};

const LinkComponent = ({ className, children, to }: Props) => (
  <Link className={className} to={to} href={to}>
    {children}
  </Link>
);

export const LinkBack = styled(LinkComponent)`
  color: ${({ theme }) => theme.mainFontColor};
  font-size: 1.1rem;
  font-weight: bold;
  padding: 5px 0 10px;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.mainColor};
  }
`;

export const DetailsWrapper = styled.main`
  border-radius: 5px;
  margin: 10px auto;
  max-width: 900px;
  padding: 0;

  @media (max-width: 990px) {
    max-width: 610px;
  }
`;

export const DetailsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 630px) {
    justify-content: flex-start;
  }
`;

export const FriendsRow = DetailsRow.extend`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  padding: 0 15px;
`;
