import styled from "styled-components";

const HeaderComponent = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.headerBG};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  height: 60px;
  justify-content: center;

  h1 {
    a {
      color: ${({ theme }) => theme.logoTextColor};
      text-decoration: none;
    }

    img {
      width: auto;
      height: 35px;
    }
  }

  div.row {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    max-width: 900px;
    width: 100%;
  }
`;

export default HeaderComponent;
