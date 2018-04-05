// @flow
import * as React from "react";
import Anchor from "./AnchorBTNStyled";

type Props = {
  anchor: string,
  children: React.Node
};

const AnchorBTN = ({ anchor, children }: Props) => (
  <Anchor href={anchor}>{children}</Anchor>
);

export default AnchorBTN;
