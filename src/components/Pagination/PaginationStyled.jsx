// @flow
import styled from "styled-components";

export const PaginationWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  width: 100%;

  & .current-page {
    font-size: 0.95rem;
    font-weight: bold;
    text-align: center;
  }
`;

export const PaginationBtn = styled.button`
  background: ${({ disableStyle }) => (disableStyle ? "none" : "#d63031")}
  color: ${({ disableStyle }) => (disableStyle ? "transparent" : "#fff")};
  cursor: ${({ disableStyle }) => (disableStyle ? "context-menu" : "pointer")};
  font-size: 1.1rem;
  width: 100%;
  max-width: 140px;
  padding:15px 0;
  text-align: center;
  
  &:hover {
    background: ${({ disableStyle }) =>
      disableStyle ? "transparent" : "##e74142"}
  }
  &:focus {
    outline:none;
  }
`;
