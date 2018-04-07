// @flow
import React, { Component } from "react";
import Spinner from "./Spinner/Spinner";

// Declare Flow typed for Props
type Props = {
  props: mixed,
  gnomeURL: string,
  loadingPromise: Promise<{ default: Class<React.Component<*, *, *>> }>
};

// HOC for loading files from code-splitting
// And split our bundle so the users will receive
// just the code they need for load the page
class AsyncRoutes extends Component<Props> {
  state = {
    loaded: false
  };
  componentDidMount() {
    // this is from webpack
    // before DOM mounted this will receive our component
    // which is exporting by default
    // and get the data it need to render
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true });
    });
  }

  component = null;

  // while loaded is false render the Spinner loader
  // when component loaded pass this component with all its props
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
