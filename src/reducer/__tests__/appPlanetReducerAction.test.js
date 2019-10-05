import AppReducer, { initialState } from "../appReducer";
import {
  GET_PLANETS,
  GET_PLANETS_ERROR,
  SELECT_PLANET,
  REMOVE_PLANET
} from "../../actions/types";

describe("Planet Reducers Test ", () => {
  it("should handle GET_PLANETS", () => {
    let planets = [{ name: "a" }, { name: "b" }];
    const action = {
      type: GET_PLANETS,
      payload: planets
    };
    const expectedState = {
      ...initialState,
      planets,
      loading: false
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle GET_PLANETS_ERROR", () => {
    let error = { message: "Not able to get planets" };
    const action = {
      type: GET_PLANETS_ERROR,
      payload: error
    };
    const expectedState = {
      ...initialState,
      error
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SELECT_PLANET", () => {
    let planet = { name: "Jupiter" };
    const action = {
      type: SELECT_PLANET,
      payload: planet
    };
    const expectedState = {
      ...initialState,
      selectedPlanets: [...initialState.selectedPlanets, planet]
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle REMOVE_PLANET", () => {
    let planet = { name: "Jupiter" };
    initialState.selectedPlanets.push(planet);
    const action = {
      type: REMOVE_PLANET,
      payload: planet
    };
    const expectedState = {
      ...initialState,
      selectedPlanets: initialState.selectedPlanets.filter(
        planetItem => planetItem.name !== planet.name
      )
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });
});
