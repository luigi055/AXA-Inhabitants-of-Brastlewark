// @flow
import React from "react";
import { connect } from "react-redux";
import { FormSearch, FormRow } from "./FiltersStyled";
import * as actions from "./../../redux/actions/actions";
import AutoCompleteInput from "./../../components/AutoCompleteInput/AutoCompleteInput";
import Select from "./../../components/Select/Select";
import OrderByBTN from "./../../components/OrderByBTN/OrderByBTN";
import type { Gnome } from "./../../../flow-typed/types";

type Props = {
  getSearchText: Function,
  filterByJob: Function,
  getCurrentPage: Function,
  gnomes: Array<Gnome>
};

const Filters = (props: Props) => {
  // Generate and array of all the names of the gnomes which will
  // Be used for autocomplete input component to show suggestions
  const gnomeNames = props.gnomes.map(gnome => gnome.name);

  // Create an array with all the professions that has the gnomes
  // in the town
  let getJobs = [];
  /* eslint-disable */
  /* FIND A BETTER WAY TO DO THIS */
  // Get all the professions of the gnomes

  for (let i = 0; i < props.gnomes.length; i++) {
    getJobs = getJobs.concat(props.gnomes[i].professions);
  }
  /* eslint-enable */

  // clearing the array removing all repetitive item
  const jobs = Array.from(new Set(getJobs));

  return (
    <FormSearch>
      <FormRow>
        <AutoCompleteInput
          stateName="searchTerm"
          updateCurrentPage={props.getCurrentPage}
          parentUpdateState={props.getSearchText}
          autoCompleteItems={gnomeNames}
          maxSuggests={5}
          maxWidth="100%"
          labelName="Search Gnome: "
          placeholder="Type a Gnome Name"
          includeSearchTerm
        />
        <Select
          items={jobs && jobs}
          defaultValue="All"
          stateName="filteBy"
          maxWidth="100%"
          updateState={props.filterByJob}
          updateCurrentPage={props.getCurrentPage}
          state={props}
        />
        <OrderByBTN>Oldest</OrderByBTN>
        <OrderByBTN>Youngest</OrderByBTN>
        <OrderByBTN>Heaviest</OrderByBTN>
        <OrderByBTN>Lightest</OrderByBTN>
        <OrderByBTN>Most Popular</OrderByBTN>
        <OrderByBTN>Less Popular</OrderByBTN>
        <OrderByBTN>Hair Color</OrderByBTN>
        <OrderByBTN>Reset</OrderByBTN>
      </FormRow>
    </FormSearch>
  );
};

function mapStateToProps(state) {
  return {
    gnomes: state.gnomes
  };
}

export default connect(mapStateToProps, actions)(Filters);
