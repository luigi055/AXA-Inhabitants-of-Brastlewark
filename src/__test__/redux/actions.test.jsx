// @flow
import moxios from "moxios";
import thunk from "redux-thunk";
import { gnomesAPI } from "./../../functions";
import { fakeGnomesData, localStorage } from "./../seed";
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
  updateOrderBy,
  fetchGnomes
} from "./../../redux/actions/actions";

// emulate localStorage API
window.localStorage = localStorage;

// Tetsing all Actions Creator
describe("Testing Actions Creators", () => {
  beforeEach(() => {
    // pass custom axios instance
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  test("fetchGnomes", (done: Function) => {
    const dispatchMock = jest.fn();
    // Mocking axios
    moxios.withMock(() => {
      // Invoking fetchGnomes with dispaych mock
      fetchGnomes()(dispatchMock);
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        // emulate the api get request
        request
          .respondWith({
            status: 200,
            response: { Brastlewark: fakeGnomesData }
          })
          .then(url => {
            expect(request.url).toEqual(gnomesAPI);
            expect(dispatchMock).toBeCalledWith(getGnomes(fakeGnomesData));
            done();
          })
          .catch(err => done(err));
      });
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
      expect(searchActionCreator).toEqual(action);
      expect(searchActionCreator).toMatchSnapshot();
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
      expect(filterByJobActionCreator).toEqual(action);
      expect(filterByJobActionCreator).toMatchSnapshot();
    });
  });
  describe("Update orderBy Action Creator", () => {
    it('should generate "Mason" in filterBy State', () => {
      const orderByValue = "Mason";
      const action = {
        type: ORDER_BY_FILTER,
        payload: orderByValue
      };

      const orderByActionCreator = updateOrderBy(orderByValue);
      expect(orderByActionCreator).toEqual(action);
      expect(orderByActionCreator).toMatchSnapshot();
    });
  });
});
