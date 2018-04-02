// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "./../../redux/actions/actions";
import AutoCompleteInput from "./../../components/AutoCompleteInput/AutoCompleteInput";
import HeaderComponent from "./HeaderStyled";

type Props = {
  gnomes: Array<string>,
  getSearchText: Function
};

class Header extends Component<Props> {
  updateSearchTerm = (term: string) => this.props.getSearchText(term);

  render() {
    const gnomes = this.props.gnomes.map(gnome => gnome.name);
    return (
      <HeaderComponent>
        <div className="row">
          <h1>
            <Link to="/" href="/">
              Gnome
            </Link>
          </h1>
          <AutoCompleteInput
            stateName="searchTerm"
            parentUpdateState={this.updateSearchTerm}
            autoCompleteItems={gnomes}
            maxSuggests={5}
            maxWidth="400px"
            labelName="Search Gnome: "
            placeholder="Type a Gnome Name"
            includeSearchTerm
          />
        </div>
      </HeaderComponent>
    );
  }
}

function mapStateToProps(state) {
  return {
    gnomes: state.gnomes,
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps, actions)(Header);
