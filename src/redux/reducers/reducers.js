// @flow
import { combineReducers } from "redux";
import gnomesReducer from "./gnomesReducer";
import searchReducer from "./searchReducer";
import professionsReducer from "./professionsReducer";

const reducer = combineReducers({
  gnomes: gnomesReducer,
  searchTerm: searchReducer,
  filterBy: professionsReducer
});

export default reducer;
