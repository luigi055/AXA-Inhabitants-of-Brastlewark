// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./../../components/Card/Card";
import * as actions from "./../../redux/actions/actions";
import { HomeRow, HomeWrapper } from "./HomeStyled";
import type { State } from "./../../../flow-typed/types";

type Props = State;

class Home extends Component<Props> {
  updateSearchTerm = (term: string) => this.props.getSearchText(term);

  render() {
    const { searchTerm, gnomes } = this.props;
    return (
      <HomeWrapper>
        <HomeRow>
          {gnomes
            .filter(
              gnome =>
                // gnome.name.toLowerCase().search(searchTerm.toLowerCase()) === 0
                gnome.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
            )
            .slice(0, 15)
            .map(gnome => (
              <Card
                key={gnome.id}
                gnome={gnome && gnome}
                to={`/gnomes/${gnome.id}-${gnome.name.split(" ").join("-")}`}
              />
            ))}
        </HomeRow>
      </HomeWrapper>
    );
  }
}

function mapStateToProps(state: State) {
  return {
    searchTerm: state.searchTerm,
    gnomes: state.gnomes
  };
}

export default connect(mapStateToProps, actions)(Home);
