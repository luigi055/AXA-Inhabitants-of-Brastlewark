// @flow
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./../reducers/reducers";

const initialValues = {
  gnomes: [],
  searchTerm: "",
  filterBy: "All"
};

const configure = (initialState = initialValues) => {
  const composeEnhancers =
    /* eslint-disable */
    // Deactivate redux devtools if production
    (process.env.NODE_ENV === "development" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  /* eslint-enable */
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept("./../reducers", () => {
  //     /* eslint-disable */
  //     const nextRootReducer = require("./../reducers/reducers");
  //     /* eslint-enable */
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
};

export default configure;
