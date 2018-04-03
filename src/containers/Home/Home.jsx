// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./../../components/Card/Card";
import * as actions from "./../../redux/actions/actions";
import { HomeRow, HomeWrapper, FormSearch, FormRow } from "./HomeStyled";
import AutoCompleteInput from "./../../components/AutoCompleteInput/AutoCompleteInput";
import Select from "./../../components/Select/Select";
import { OrderByBTN, ResetBTN } from "./../../components/OrderByBTN/OrderByBTN";

import type { State } from "./../../../flow-typed/types";

type Props = State;

class Home extends Component<Props> {
  updateSearchTerm = (term: string) => this.props.getSearchText(term);
  updateFilterJob = (job: string) => this.props.filterByJob(job);
  updateOrderBy = (order: string) => this.props.orderBy(order);

  render() {
    const { searchTerm, gnomes, orderByFilter } = this.props;
    const gnomeNames = this.props.gnomes.map(gnome => gnome.name);
    let getJobs = [];
    /* eslint-disable */
    /* FIND A BETTER WAY TO DO THIS */
    for (let i = 0; i < gnomes.length; i++) {
      getJobs = getJobs.concat(gnomes[i].professions);
    }
    /* eslint-enable */
    const jobs = Array.from(new Set(getJobs));
    return (
      <HomeWrapper>
        <HomeRow>
          <FormSearch onSubmit={Home.handleSubmit}>
            <AutoCompleteInput
              stateName="searchTerm"
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
              state={this.props}
            />
            <FormRow>
              <OrderByBTN
                orderBy={orderByFilter}
                updateOrderBy={this.updateOrderBy}
              >
                Oldest
              </OrderByBTN>
              <OrderByBTN
                orderBy={orderByFilter}
                updateOrderBy={this.updateOrderBy}
              >
                Youngest
              </OrderByBTN>
              <OrderByBTN
                orderBy={orderByFilter}
                updateOrderBy={this.updateOrderBy}
              >
                weighest
              </OrderByBTN>
              <OrderByBTN
                orderBy={orderByFilter}
                updateOrderBy={this.updateOrderBy}
              >
                weighless
              </OrderByBTN>
              <OrderByBTN
                orderBy={orderByFilter}
                updateOrderBy={this.updateOrderBy}
              >
                Most Popular
              </OrderByBTN>
              <OrderByBTN
                orderBy={orderByFilter}
                updateOrderBy={this.updateOrderBy}
              >
                Less Popular
              </OrderByBTN>
              <OrderByBTN
                updateOrderBy={this.updateOrderBy}
                orderBy={orderByFilter}
              >
                Hair Color
              </OrderByBTN>
              <ResetBTN
                updateOrderBy={this.updateOrderBy}
                updateSearchTerm={this.updateSearchTerm}
                updateFilterJob={this.updateFilterJob}
                orderBy={orderByFilter}
              >
                Reset
              </ResetBTN>
            </FormRow>
          </FormSearch>
        </HomeRow>
        <HomeRow>
          {gnomes
            .filter(gnome => {
              // filter by profession
              const isJob = gnome.professions.find(
                profession => profession === this.props.filterBy
              );
              const hasProfession = gnome.professions.some(
                profession => profession === isJob
              );
              return this.props.filterBy === "All" ? gnome : hasProfession;
            })
            .filter(gnome => {
              // gnome.name.toLowerCase().search(searchTerm.toLowerCase()) === 0
              const search =
                gnome.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
              return search;
            })
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

Home.handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
  event.preventdefault();
};

function mapStateToProps(state: State) {
  return {
    searchTerm: state.searchTerm,
    gnomes: state.gnomes,
    filterBy: state.filterBy,
    orderByFilter: state.orderBy
  };
}

export default connect(mapStateToProps, actions)(Home);
