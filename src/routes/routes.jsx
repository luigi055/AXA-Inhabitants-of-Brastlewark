// @flow
import React from "react";
import { Route, Switch } from "react-router";
import Home from "./../containers/Home/Home";
import Header from "./../containers/Header/Header";
import Details from "./../containers/Details/Details";

type Props = {
  gnomes: Array<object>
};
const Routes = (props: Props) => (
  <div>
    <Header gnomes={props.gnomes} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/gnomes/:gnome"
        component={({ match }) => <Details gnomeURL={match.params.gnome} />}
      />
      <Route render={() => <h1>Not Found :(</h1>} />
    </Switch>
  </div>
);

export default Routes;
