import styled from "styled-components";
import LogoPNG from "./../../img/gnome-loading.png";
// import LogoSVG from "./../../img/gnome-logo.svg";

// function getLogo() {
//   return Math.random() >= 0.5 ? LogoSVG : LogoPNG;
// }

export const LoadingStyled = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.mainColor};
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  & > div.box {
    color: #fff;
    font-weight: bold;
    max-width: 400px;
    text-align: center;
    width: 100%;
    h1 {
      font-size: 1.8rem;
      margin: 5px 0 12px;
    }
    span {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 400px) {
    & > div.box {
      h1 {
        font-size: 2rem;
      }
      span {
        font-size: 1.3rem;
      }
    }
  }
`;

export const Logo = styled.div`
  background: url(${LogoPNG}) no-repeat center;
  background-size: contain;
  margin: 0 auto;
  height: 150px;
  transform: rotate(358deg);
  width: 150px;
`;
