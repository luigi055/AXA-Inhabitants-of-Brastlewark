// @flow
import {
  REQUEST_GNOMES,
  SEARCH_TERM,
  FILTER_BY_JOB,
  ORDER_BY_FILTER
} from "./../../redux/actions/types";
import gnomesReducer from "./../../redux/reducers/gnomesReducer";
import searchReducer from "./../../redux/reducers/searchReducer";
import orderByReducer from "./../../redux/reducers/orderByReducer";
import professionsReducer from "./../../redux/reducers/professionsReducer";

describe("Testing reducers", () => {
  describe("gnomesReducer", () => {
    it("Should get all gnomes", () => {
      const gnomes = [
        {
          id: 1,
          name: "optus gnom"
        },
        {
          id: 2,
          name: "liptin gutz"
        }
      ];
      const action = {
        type: REQUEST_GNOMES,
        payload: gnomes
      };

      const res = gnomesReducer([], action);

      expect(res).toEqual(action.payload);
    });
  });
  describe("searchReducer", () => {
    it("Should set search term", () => {
      const action = {
        type: SEARCH_TERM,
        payload: "gnomin gnomon"
      };

      const res = searchReducer("", action);

      expect(res).toEqual(action.payload);
    });
  });
  describe("orderByReducer", () => {
    it("Should set term for ordering gnomes", () => {
      const action = {
        type: ORDER_BY_FILTER,
        payload: "Oldest"
      };

      const res = orderByReducer("", action);

      expect(res).toEqual(action.payload);
    });
  });
  describe("professionsReducer", () => {
    it("Should set term for filter gnome by profession", () => {
      const action = {
        type: FILTER_BY_JOB,
        payload: "Mason"
      };

      const res = professionsReducer("", action);

      expect(res).toEqual(action.payload);
    });
  });
});
