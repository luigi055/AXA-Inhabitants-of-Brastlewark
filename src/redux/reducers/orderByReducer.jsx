// @flow
import { ORDER_BY_FILTER } from "./../actions/types";

function orderByReducer(state = "", action: Action) {
  switch (action.type) {
    case ORDER_BY_FILTER:
      return action.payload;
    default:
      return state;
  }
}
export default orderByReducer;
