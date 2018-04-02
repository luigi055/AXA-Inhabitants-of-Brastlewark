// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as actions from "./../redux/actions/actions";
import Routes from "./../routes/routes";

type Props = {
  fetchGnomes: Function,
  gnomes: Array<object>
};

class Main extends Component<Props> {
  componentDidMount() {
    this.props.fetchGnomes();
  }

  render() {
    return (
      <Router>
        <Routes gnome={this.props.gnomes} />
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    gnomes: state.gnomes
  };
}

export default connect(mapStateToProps, actions)(Main);
