// @flow
import { combineReducers } from "redux";
import gnomesReducer from "./gnomesReducer";
import searchReducer from "./searchReducer";

const reducer = combineReducers({
  gnomes: gnomesReducer,
  searchTerm: searchReducer
});

export default reducer;
