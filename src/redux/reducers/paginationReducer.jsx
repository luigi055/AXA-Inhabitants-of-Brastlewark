// @flow
import { CURRENT_PAGE } from "./../actions/types";

function paginationReducer(state = 0, action: Action) {
  switch (action.type) {
    case CURRENT_PAGE:
      return action.payload;
    default:
      return state;
  }
}
export default paginationReducer;
