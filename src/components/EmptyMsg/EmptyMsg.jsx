// @flow
import * as React from "react";
import EmptyStyled from "./EmptyMsgStyled";

type Props = {
  children: React.Node
};

const EmptyMsg = ({ children }: Props) => <EmptyStyled>{children}</EmptyStyled>;

export default EmptyMsg;
