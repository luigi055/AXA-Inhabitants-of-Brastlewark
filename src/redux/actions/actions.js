// @flow
import axios from "axios";
import type { Gnome } from "./../../../flow-typed/types";
import {
  REQUEST_GNOMES,
  SEARCH_TERM,
  FILTER_BY_JOB,
  ORDER_BY_FILTER,
  CURRENT_PAGE
} from "./types";

export const getGnomes = (gnomes: Array<Gnome>) => ({
  type: REQUEST_GNOMES,
  payload: gnomes
});

/* eslint-disable */
export const fetchGnomes = () => async (dispatch: Function) => {
  const offlineGnomes = localStorage.getItem("gnomes");
  if (offlineGnomes) {
    const gnomes = JSON.parse(offlineGnomes);
    return dispatch(getGnomes(gnomes));
  }

  try {
    const { data: { Brastlewark: gnomes } } = await axios.get(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    );
    const gnomesToJSON = JSON.stringify(gnomes);
    localStorage.setItem("gnomes", gnomesToJSON);
    dispatch(getGnomes(gnomes));
  } catch (err) {
    throw new Error(err);
  }
};

/* eslint-enable */
export const getSearchText = (searchTerm: string) => ({
  type: SEARCH_TERM,
  payload: searchTerm
});

export const filterByJob = (job: string) => ({
  type: FILTER_BY_JOB,
  payload: job
});

export const updateOrderBy = (order: string) => ({
  type: ORDER_BY_FILTER,
  payload: order
});

export const getCurrentPage = (page: number) => ({
  type: CURRENT_PAGE,
  payload: page
});
