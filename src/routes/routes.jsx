// @flow
import React from "react";
import { Route, Switch } from "react-router";
import Home from "./../containers/Home/Home";
import Header from "./../containers/Header/Header";
import Details from "./../containers/Details/Details";

export default () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/gnomes" component={Details} />
      <Route render={() => <h1>Not Found :(</h1>} />
    </Switch>
  </div>
);
