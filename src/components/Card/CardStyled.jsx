// @flow
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Props = {
  className: string,
  to: string,
  children: ReactElements
};

const CardLink = ({ className, children, to }: Props) => (
  <Link className={className} to={to} href={to}>
    {children}
  </Link>
);

export const GnomeCard = styled(CardLink)`
  border-radius: 5px;
  background: ${({ theme }) => theme.cardBG};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: ${({ theme }) => theme.mainFontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5px 15px;
  max-width: 400px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: 0.5s;
  width: 100%;

  &:hover {
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.4);
    transition: 0.5s;
  }

  div.banner {
    background: ${props => props.hairColor};
    height: 80px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  header.description {
    margin: 10px 0 20px;
    padding: 0 10px;
    text-align: center;

    h2 {
      margin: 0 0 10px;
    }
    & > div {
      font-size: 0.8rem;
    }
  }

  div.banner-footer {
    bottom: 0;
    background: ${props => props.hairColor};
    height: 8px;
    position: absolute;
    width: 100%;
  }

  @media screen and (min-width: 630px) {
    max-width: 280px;
  }
`;

export const Avatar = styled.div`
  background: ${props => `url(${props.src}) no-repeat center`};
  background-size: cover;
  border: 4px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  margin: 30px auto 0;
  padding: 5px;
  height: 100px;
  position: relative;
  width: 100px;
  z-index: 1;
  img {
    position: absolute;
    height: 0;
    visibility: hidden;
    width: 0;
  }
`;

export const GnomeInfo = styled.ul`
  display: flex;
  list-style: none;
  padding: 0 10px 12px;
`;

export const GnomeInfoList = styled.li`
  text-align: center;
  width: 33%;
  span {
    display: block;
  }
  span:first-child {
    color: ${({ theme }) => theme.secondaryFontColor}
    font-weight: bold;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  span:last-child {
    color: ${({ hairColor }) => hairColor || "#f94"};
    font-weight: bold;
    font-size: 1.2rem;
    padding: 5px; 0 10px;

    span.unit {
      display: inline;
      font-size: 0.8rem;
      margin-left: -8px;
    }
  }
`;
