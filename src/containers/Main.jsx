// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as actions from "./../redux/actions/actions";
import Loading from "./../components/Loading/Loading";
import Routes from "./../routes/routes";

type Props = {
  fetchGnomes: Function,
  gnomes: Array<Gnome>
};

class Main extends Component<Props> {
  componentDidMount() {
    this.props.fetchGnomes();
  }

  render() {
    return (
      <Router>
        {this.props.gnomes.length === 0 ? (
          <Loading />
        ) : (
          <Routes gnome={this.props.gnomes} />
        )}
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
