// @flow
import React from "react";
import { Route, Switch } from "react-router";
import Header from "./../containers/Header/Header";
import Footer from "./../components/Footer/Footer";
import AsynchRoutes from "./AsyncRoutes";

type Props = {
  match: any
};
const Routes = () => (
  <div>
    <Header />
    <Switch>
      <Route
        exact
        path="/"
        component={(props: Props) => (
          <AsynchRoutes
            props={props}
            loadingPromise={import("./../containers/Home/Home")}
          />
        )}
      />
      <Route
        exact
        path="/gnomes/:gnome"
        component={(props: Props) => (
          <AsynchRoutes
            gnomeURL={props.match.params.gnome}
            loadingPromise={import("./../containers/Details/Details")}
          />
        )}
      />

      <Route render={() => <h1>Not Found :(</h1>} />
    </Switch>
    <Footer />
  </div>
);

export default Routes;
