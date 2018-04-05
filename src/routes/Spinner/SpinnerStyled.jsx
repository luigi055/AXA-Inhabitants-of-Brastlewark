// @flow
import styled from "styled-components";

type Props = {
  height: string,
  width: string
};
export const Image = styled.img`
  margin: 0;
  height: ${({ height }: Props) => height};
  width: ${({ width }: Props) => width};
  padding: 0 5px;
`;

Image.defaultProps = {
  height: "auto",
  width: "100px"
};

export const Loading = styled.div`
  align-items: center;
  background: inherit;
  display: flex;
  justify-content: center;
  height: 100vh;
  position: relative;
  width: 100vw;
`;

export default Loading;
