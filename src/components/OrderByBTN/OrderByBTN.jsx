// @flow
import * as React from "react";
import { connect } from "react-redux";
import * as actions from "./../../redux/actions/actions";
import OrderButton from "./OrderByBTNStyled";

type Props = {
  children: React.Node,
  active: boolean,
  width: string,
  maxWidth?: string,
  highScreenWidth: string,
  updateOrderBy: Function,
  orderBy?: string,
  getCurrentPage: Function
};

const OrderByBTN = (props: Props) => (
  <OrderButton
    active={props.children !== 'Reset' && props.orderBy === props.children}
    {...props}
    onClick={OrderByBTN.handleClick(props.updateOrderBy, props.getCurrentPage)}
  >
    {props.children}
  </OrderButton>
);

OrderByBTN.defaultProps = {
  maxWidth: "100%",
  orderBy: ""
};

OrderByBTN.handleClick = (
  updateOrderBy: Function,
  getCurrentPage: Function
) => (event: SyntheticMouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  updateOrderBy(event.currentTarget.textContent);
  getCurrentPage(0);
};

function mapStateToProps(state) {
  return {
    orderBy: state.orderBy
  };
}

export default connect(mapStateToProps, actions)(OrderByBTN);
