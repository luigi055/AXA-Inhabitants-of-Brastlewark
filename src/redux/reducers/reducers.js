// @flow
import { combineReducers } from "redux";
import gnomesReducer from "./gnomesReducer";
import searchReducer from "./searchReducer";
import professionsReducer from "./professionsReducer";
import orderByReducer from "./orderByReducer";

const reducer = combineReducers({
  gnomes: gnomesReducer,
  searchTerm: searchReducer,
  filterBy: professionsReducer,
  orderBy: orderByReducer
});

export default reducer;
