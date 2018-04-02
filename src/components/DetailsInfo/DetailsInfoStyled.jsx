// @flow
import styled from "styled-components";

export const GnomeDetails = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.cardBG};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  color: ${({ theme }) => theme.mainFontColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: 0.5s;
  width: 100%;

  div.banner {
    background: ${props => props.hairColor};
    height: 130px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  header.description {
    margin: 10px 0 20px;
    padding: 0 10px;
    text-align: center;

    h2 {
      font-size: 1.7rem;
      margin: 0 0 10px;
    }
    & > div {
      font-size: 1.2rem;
      margin: 0 0 20px;
    }
  }

  div.banner-footer {
    bottom: 0;
    background: ${props => props.hairColor};
    height: 15px;
    position: absolute;
    width: 100%;
  }
`;

export const Avatar = styled.div`
  background: ${props => `url(${props.src}) no-repeat center`};
  background-size: cover;
  border: 4px solid ${({ theme }) => theme.cardBG};
  border-radius: 50%;
  box-sizing: border-box;
  margin: 30px auto 0;
  padding: 5px;
  height: 200px;
  position: relative;
  width: 200px;
  z-index: 1;
  img {
    position: absolute;
    height: 0;
    visibility: hidden;
    width: 0;
  }
`;

export const GnomeInfoDetails = styled.ul`
  display: flex;
  list-style: none;
  padding: 0 10px 12px;
`;

export const GnomeInfoListDetails = styled.li`
  text-align: center;
  width: 25%;
  span {
    display: block;
  }
  span:first-child {
    color: ${({ theme }) => theme.secondaryFontColor}
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  span:last-child {
    color: ${({ hairColor }) => hairColor || "#f94"};
    font-weight: bold;
    font-size: 1.3rem;
    padding: 5px; 0 10px;

    span.unit {
      display: inline;
      font-size: 0.9rem;
      margin-left: -8px;
    }
  }
`;
