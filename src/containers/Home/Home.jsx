// @flow
import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import Filters from "./../Filters/Filters";
import Card from "./../../components/Card/Card";
import * as actions from "./../../redux/actions/actions";
import { HomeRow, HomeWrapper } from "./HomeStyled";
import EmptyMsg from "./../../components/EmptyMsg/EmptyMsg";
import Pagination from "./../../components/Pagination/Pagination";
import { filterGnomesBy } from "./../../functions";
// Import State Flow type for our redux state to props declaration
import type { State } from "./../../../flow-typed/types";

// Declare our props with flow typed
type Props = State;

const Home = (props: Props) => {
  // destructuring our props for easy for write
  const { searchTerm, gnomes, orderByFilter, currentPage } = props;
  const itemsByPage = 9;

  // Filter the gnomes ordering them by youngest, oldest, lighter, heaviest, popularity
  // Returns and array with all the filtered gnomes and finally generate
  // our card based this filtered array
  const searchFilters = filterGnomesBy(gnomes, orderByFilter)
    .filter(gnome => {
      // filter by profession
      // If this gnome has this profession from redux state
      // return the profession of this gnome
      const isJob = gnome.professions.find(
        profession => profession === props.filterBy
      );

      // And then if this gnome know this profession return true
      // Otherwise return false and ignore pass this gnome to the new array
      const hasProfession = gnome.professions.some(
        profession => profession === isJob
      );
      // if filterBy state is all returns all gnomes if not return depending
      // of the profession we're looking for
      return props.filterBy === "All" ? gnome : hasProfession;
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
        <Filters />
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
        updateGlobalState={props.getCurrentPage}
        maxPages={Math.floor(searchFilters.length / itemsByPage)}
      />
    </HomeWrapper>
  );
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
