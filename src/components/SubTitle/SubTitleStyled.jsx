import styled from "styled-components";

const SubHeading = styled.div`
  display: block;
  margin: 15px 0 10px;
  position: relative;
  text-align: center;
  padding: 0 5px;
  width: 100%;
  z-index: 0;
  & h2 {
    position: relative;
    background: #fbffff;
    color: #666;
    padding: 0 20px;
    display: inline;
    font-size: 1.2rem;
    z-index: 2;
  }

  & hr {
    display: block;
    position: absolute;
    border-top: 1px solid #ccc;
    top: 10px;
    width: 100%;
    z-index: 1;
  }
`;

export default SubHeading;
