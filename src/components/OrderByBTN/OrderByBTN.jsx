// @flow
import * as React from "react";
import OrderButton from "./OrderByBTNStyled";

type Props = {
  children: React.Node,
  active: boolean,
  width: string,
  maxWidth?: string,
  highScreenWidth: string,
  updateOrderBy: Function,
  updateSearchTerm: Function,
  updateFilterJob: Function,
  orderBy?: string
};

export const OrderByBTN = (props: Props) => (
  <OrderButton
    active={props.orderBy === props.children}
    {...props}
    onClick={OrderByBTN.handleClick(props.updateOrderBy)}
  >
    {props.children}
  </OrderButton>
);

OrderByBTN.defaultProps = {
  maxWidth: "100%",
  orderBy: ""
};

OrderByBTN.handleClick = updateOrderBy => (
  event: SyntheticMouseEvent<HTMLButtonElement>
) => {
  event.preventDefault();
  updateOrderBy(event.currentTarget.textContent);
};

export const ResetBTN = (props: Props) => (
  <OrderButton {...props} onClick={ResetBTN.handleClick(props.updateOrderBy)}>
    {props.children}
  </OrderButton>
);

ResetBTN.defaultProps = {
  maxWidth: "100%",
  orderBy: ""
};

ResetBTN.handleClick = updateOrderBy => (
  event: SyntheticMouseEvent<HTMLButtonElement>
) => {
  event.preventDefault();
  updateOrderBy(event.currentTarget.textContent);
};
