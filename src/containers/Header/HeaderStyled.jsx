import styled from "styled-components";

const HeaderComponent = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.headerBG};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  height: 50px;
  justify-content: center;

  h1 {
    a {
      color: ${({ theme }) => theme.logoTextColor};
      text-decoration: none;
    }
  }

  div.row {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0 5px;
    max-width: 900px;
    width: 100%;
  }
`;

export default HeaderComponent;
