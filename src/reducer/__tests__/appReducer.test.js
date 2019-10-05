import AppReducer, { initialState } from "../appReducer";
import {
  SET_LOADING,
  UPDATE_TIME,
  GET_TOKEN,
  FIND_FALCONE_SUCCESS,
  FIND_FALCONE_FAIL,
  FIND_FALCONE_ERROR
} from "../../actions/types";
import { incrementVehicleCount } from "../../actions/vechicleActions";

describe("App Reducer tests", () => {
  it("should return initial state", () => {
    const action = {
      type: null
    };
    expect(AppReducer(initialState, action)).toEqual(initialState);
  });

  it("should handle GET_TOKEN", () => {
    let token = "XXXXXX";
    const action = {
      type: GET_TOKEN,
      payload: { token }
    };
    const expectedState = {
      ...initialState,
      token
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle SET_LOADING", () => {
    const action = {
      type: SET_LOADING
    };
    const expectedState = {
      ...initialState,
      loading: true
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FIND_FALCONE_SUCCESS", () => {
    const planet = "Mars";
    const action = {
      type: FIND_FALCONE_SUCCESS,
      payload: planet
    };
    const expectedState = {
      ...initialState,
      falconePlanet: planet,
      falconeSuccess: true
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FIND_FALCONE_FAIL", () => {
    const action = {
      type: FIND_FALCONE_FAIL
    };
    const expectedState = {
      ...initialState,
      falconeSuccess: false,
      falconePlanet: null
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle FIND_FALCONE_ERROR", () => {
    const error = { message: "Error while finding the falcone" };
    const action = {
      type: FIND_FALCONE_ERROR,
      payload: error
    };
    const expectedState = {
      ...initialState,
      error
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle UPDATE_TIME", () => {
    const time = 10;
    const action = {
      type: UPDATE_TIME,
      payload: time
    };
    const expectedState = {
      ...initialState,
      totalTime: time
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });
});
