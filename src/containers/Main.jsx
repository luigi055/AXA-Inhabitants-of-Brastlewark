// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import * as actions from "./../redux/actions/actions";
import Loading from "./../components/Loading/Loading";
import Routes from "./../routes/routes";

// Declaring Flow types for Props
type Props = {
  fetchGnomes: Function,
  gnomes: Array<Gnome>
};

// now pass the Types declaration to our class component
class Main extends Component<Props> {
  componentDidMount() {
    // Get all the gnomes from the Api
    // this is an action creator we got from the react-redux connect method
    this.props.fetchGnomes();
  }

  // If there is not gnomes in the gnomes state (got from Redux state)
  // it will render Loading component first while we can receive all the inhabitants
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

// mapStateToProps we pass this function to the connect method to
// inject our Redux states as props in Main container
function mapStateToProps(state) {
  return {
    gnomes: state.gnomes
  };
}

export default connect(mapStateToProps, actions)(Main);
