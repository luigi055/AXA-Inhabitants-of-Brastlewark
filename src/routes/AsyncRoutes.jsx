// @flow
import React, { Component } from "react";
import Spinner from "./Spinner/Spinner";

// HOC for loading files from code-splitting
class AsyncRoutes extends Component {
  state = {
    loaded: false
  };
  componentDidMount() {
    // this is from webpack
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }
  props: {
    props: mixed,
    gnomeURL: string,
    loadingPromise: Promise<{ default: Class<React.Component<*, *, *>> }>
  };
  component = null;

  render() {
    if (!this.state.loaded) {
      return <Spinner />;
    }
    return (
      <this.component {...this.props.props} gnomeURL={this.props.gnomeURL} />
    );
  }
}

export default AsyncRoutes;
