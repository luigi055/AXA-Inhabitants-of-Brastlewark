// @flow
import chai, { expect } from "chai";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  REQUEST_GNOMES,
  SEARCH_TERM,
  FILTER_BY_JOB,
  ORDER_BY_FILTER
} from "./../../redux/actions/types";
import {
  getGnomes,
  getSearchText,
  filterByJob,
  orderBy,
  fetchGnomes
} from "./../../redux/actions/actions";

describe("Testing Actions Creators", () => {
  describe("fetch inhabitants of Brastlewark Action Creator", () => {
    let mockStore;
    beforeEach(() => {
      mockStore = configureMockStore([thunk]);
    });

    it("should generate all Gnomes from API", (done: Function) => {
      const store = mockStore({ gnomes: [] });

      const expectedActions = [
        {
          type: REQUEST_GNOMES,
          payload: [{ id: 1, name: "gnomin" }]
        }
      ];

      // emulating redux-thunk
      store.dispatch(getGnomes([{ id: 1, name: "gnomin" }]));
      expect(store.getActions()).to.be.deep.equal(expectedActions);

      done();
    });
  });

  describe("Update Search State Action Creator", () => {
    it('should generate "big gnome" in searchTerm State', () => {
      const searchGnome = "big gnome";
      const action = {
        type: SEARCH_TERM,
        payload: searchGnome
      };

      const searchActionCreator = getSearchText(searchGnome);
      expect(searchActionCreator).to.be.deep.equal(action);
    });
  });

  describe("Update filterByJob Action Creator", () => {
    it('should generate "Mason" in filterBy State', () => {
      const filterByJobValue = "Mason";
      const action = {
        type: FILTER_BY_JOB,
        payload: filterByJobValue
      };

      const filterByJobActionCreator = filterByJob(filterByJobValue);
      expect(filterByJobActionCreator).to.be.deep.equal(action);
    });
  });
  describe("Update orderBy Action Creator", () => {
    it('should generate "Mason" in filterBy State', () => {
      const orderByValue = "Mason";
      const action = {
        type: ORDER_BY_FILTER,
        payload: orderByValue
      };

      const orderByActionCreator = orderBy(orderByValue);
      expect(orderByActionCreator).to.be.deep.equal(action);
    });
  });
});
