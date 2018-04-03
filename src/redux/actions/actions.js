// @flow
import axios from "axios";
import {
  REQUEST_GNOMES,
  SEARCH_TERM,
  FILTER_BY_JOB,
  ORDER_BY_FILTER
} from "./types";

/* eslint-disable */
export const fetchGnomes = () => async (dispatch: Function) => {
  try {
    const { data: { Brastlewark } } = await axios.get(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    );

    const gnomes = Brastlewark.map(findGnome => findGnome);
    dispatch({
      type: REQUEST_GNOMES,
      payload: gnomes
    });
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

export const orderBy = (order: string) => ({
  type: ORDER_BY_FILTER,
  payload: order
});
