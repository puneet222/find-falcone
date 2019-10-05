import {
  GET_PLANETS,
  SET_LOADING,
  GET_PLANETS_ERROR,
  SELECT_PLANET,
  REMOVE_PLANET
} from "../types";
import { GET_PLANETS_API } from "../apis";
import {
  getPlanets,
  selectPlanet,
  removePlanet,
  setLoading
} from "../planetActions";
import moxios from "moxios";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { catchClause } from "@babel/types";

describe("Planet Actions", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const getPlanetsResponse = [
    { name: "A", distance: 10 },
    { name: "B", distance: 20 }
  ];

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(GET_PLANETS_API, {
      status: 200,
      response: getPlanetsResponse
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should create the action GET_PLANETS", async done => {
    const expectedAction = [
      {
        type: GET_PLANETS,
        payload: getPlanetsResponse
      }
    ];
    const store = mockStore({});
    await store.dispatch(getPlanets()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
    done();
  });

  it("should create the action SELECT_PLANET", () => {
    let planet = { name: "xxxxxx" };
    let expectedAction = {
      type: SELECT_PLANET,
      payload: planet
    };
    expect(selectPlanet(planet)).toEqual(expectedAction);
  });

  it("should create the action REMOVE_PLANET", () => {
    let planet = { name: "xxxxxx" };
    let expectedAction = {
      type: REMOVE_PLANET,
      payload: planet
    };
    expect(removePlanet(planet)).toEqual(expectedAction);
  });

  it("should create the action SET_LOADING", () => {
    let expectedAction = {
      type: SET_LOADING
    };
    expect(setLoading()).toEqual(expectedAction);
  });
});
