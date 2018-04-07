// @flow
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import Card from "./../../components/Card/Card";
import * as actions from "./../../redux/actions/actions";
import { HomeRow, HomeWrapper, FormSearch, FormRow } from "./HomeStyled";
import AutoCompleteInput from "./../../components/AutoCompleteInput/AutoCompleteInput";
import EmptyMsg from "./../../components/EmptyMsg/EmptyMsg";
import Select from "./../../components/Select/Select";
import Pagination from "./../../components/Pagination/Pagination";
// import AnchorBTN from "./../../components/AnchorBTN/AnchorBTN";
import OrderByBTN from "./../../components/OrderByBTN/OrderByBTN";
import { filterGnomesBy } from "./../../functions";
// Import State Flow type for our redux state to props declaration
import type { State } from "./../../../flow-typed/types";

// Declare our props with flow typed
type Props = State;

class Home extends Component<Props> {
  // Simple pure function that receive data from child components
  // and update Redux state without the need to connect them directly
  // with our little component. this approach keeps other components
  // reusable
  updateSearchTerm = (term: string) => this.props.getSearchText(term);
  updateFilterJob = (job: string) => this.props.filterByJob(job);
  updateOrderBy = (order: string) => this.props.updateOrderBy(order);
  updateCurrentPage = (page: string) => this.props.getCurrentPage(page);

  render() {
    // destructuring our props for easy for write
    const { searchTerm, gnomes, orderByFilter, currentPage } = this.props;
    const itemsByPage = 9;
    // Generate and array of all the names of the gnomes which will
    // Be used for autocomplete input component to show suggestions
    const gnomeNames = this.props.gnomes.map(gnome => gnome.name);

    // Create an array with all the professions that has the gnomes
    // in the town
    let getJobs = [];
    /* eslint-disable */
    /* FIND A BETTER WAY TO DO THIS */
    // Get all the professions of the gnomes
    for (let i = 0; i < gnomes.length; i++) {
      getJobs = getJobs.concat(gnomes[i].professions);
    }
    /* eslint-enable */
    // clearing the array removing all repetitive item
    const jobs = Array.from(new Set(getJobs));

    // Filter the gnomes ordering them by youngest, oldest, lighter, heaviest, popularity
    // Returns and array with all the filtered gnomes and finally generate
    // our card based this filtered array
    const searchFilters = filterGnomesBy(gnomes, orderByFilter)
      .filter(gnome => {
        // filter by profession
        // If this gnome has this profession from redux state
        // return the profession of this gnome
        const isJob = gnome.professions.find(
          profession => profession === this.props.filterBy
        );

        // And then if this gnome know this profession return true
        // Otherwise return false and ignore pass this gnome to the new array
        const hasProfession = gnome.professions.some(
          profession => profession === isJob
        );
        // if filterBy state is all returns all gnomes if not return depending
        // of the profession we're looking for
        return this.props.filterBy === "All" ? gnome : hasProfession;
      })
      .filter(gnome => {
        // Filter name
        // This comentted expression is for search exactly
        // if match from the beginning of the string
        // gnome.name.toLowerCase().search(searchTerm.toLowerCase()) === 0

        // Get the gnomes that contains this bit of string within
        const search =
          gnome.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
        return search;
      });

    /* 
        Declaring meta tags and title for <head> thanks to react-helmet
       the rest of UI Components is for controlling our filters
       if there is not coincidences return EmptyMSG which inform this gnome
       was not matched
      */
    return (
      <HomeWrapper>
        <Helmet>
          <title>BrastlewarkerS || Home</title>
          <link rel="shortcut icon" href="favicon.ico" />
          <meta
            name="description"
            content="little application where it's posible to consult information about the inhabitants of brastlewarks, age, weight, name, professions and more."
          />
        </Helmet>
        <HomeRow>
          <FormSearch onSubmit={Home.handleSubmit}>
            <AutoCompleteInput
              stateName="searchTerm"
              updateCurrentPage={this.updateCurrentPage}
              parentUpdateState={this.updateSearchTerm}
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
              updateState={this.updateFilterJob}
              updateCurrentPage={this.updateCurrentPage}
              state={this.props}
            />
            <FormRow>
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
        </HomeRow>
        <HomeRow>
          {searchFilters.length > 0 ? (
            searchFilters
              .slice(
                itemsByPage * currentPage,
                itemsByPage + currentPage * itemsByPage
              ) // slice will control the pagination it calculate the quantity of items we want to show by the current page
              .map(gnome => (
                <Card
                  key={gnome.id}
                  gnome={gnome && gnome}
                  to={`/gnomes/${gnome.id}-${gnome.name.split(" ").join("-")}`}
                />
              ))
          ) : (
            <EmptyMsg>GNOME NOT FOUND</EmptyMsg>
          )}
        </HomeRow>
        <Pagination
          page={currentPage}
          updateGlobalState={this.updateCurrentPage}
          maxPages={Math.floor(searchFilters.length / itemsByPage)}
        />
      </HomeWrapper>
    );
  }
}

// Handle submit event handle for form tag
// this approach on declaring events handlers improves
// Readability and maintainance also improve time loading
// since the class and components will be read first by
// the browser engine- also it's the unique reference for all
// others components which would need this
Home.handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
  event.preventdefault();
};

// Inject Redux states to React Props
// Thanks to react-redux connect method
function mapStateToProps(state: State) {
  return {
    searchTerm: state.searchTerm,
    gnomes: state.gnomes,
    filterBy: state.filterBy,
    orderByFilter: state.orderBy,
    currentPage: state.currentPage
  };
}
// This approach to get actions creators is easier
// Since we get all the exported methods when we import the file
// and just with passing in connect we have access to all of them
export default connect(mapStateToProps, actions)(Home);
