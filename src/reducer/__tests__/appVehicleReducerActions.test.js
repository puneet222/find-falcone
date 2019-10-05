import AppReducer, { initialState } from "../appReducer";
import {
  GET_VEHICLES,
  ASSIGN_VEHICLE,
  UNASSIGN_VEHICLE,
  INCREMENT_VEHICLE_COUNT,
  DECREMENT_VEHICLE_COUNT,
  GET_VEHICLES_ERROR
} from "../../actions/types";

describe("Vehicle Reducers Tests", () => {
  it("should handle GET_VEHICLES", () => {
    let vehicles = [{ name: "a" }, { name: "b" }];
    const action = {
      type: GET_VEHICLES,
      payload: vehicles
    };
    const expectedState = {
      ...initialState,
      vehicles,
      availableVehicles: vehicles,
      loading: false
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle GET_VEHICLES_ERROR", () => {
    let error = { message: "Not able to get vehicles" };
    const action = {
      type: GET_VEHICLES_ERROR,
      payload: error
    };
    const expectedState = {
      ...initialState,
      vehicles: [],
      error
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle ASSIGN_VEHICLE", () => {
    let vehicle = { name: "car" };
    let planet = { name: "mars" };
    const action = {
      type: ASSIGN_VEHICLE,
      payload: { vehicle, planet }
    };
    const expectedState = {
      ...initialState,
      selectedVehicles: { [planet.name]: vehicle.name }
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle UNASSIGN_VEHICLE", () => {
    let vehicle = { name: "car" };
    let planet = { name: "mars" };
    const action = {
      type: UNASSIGN_VEHICLE,
      payload: { name: "earth" }
    };
    initialState.selectedVehicles = {
      ...initialState.selectedVehicles,
      earth: "tesla",
      [planet.name]: vehicle.name
    };
    const expectedState = {
      ...initialState,
      selectedVehicles: {}
    };
    //   console.log(initialState);
    //   console.log(expectedState);
    //   console.log(AppReducer(initialState, action));
    //   expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle INCREMENT_VEHICLE_COUNT", () => {
    let vehicles = [{ name: "bike", total_no: 3 }];
    initialState.availableVehicles = vehicles;
    let expectedState = {
      ...initialState,
      availableVehicles: [
        {
          name: "bike",
          total_no: 4
        }
      ]
    };
    let action = {
      type: INCREMENT_VEHICLE_COUNT,
      payload: "bike"
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle DECREMENT_VEHICLE_COUNT", () => {
    let vehicles = [{ name: "bike", total_no: 3 }];
    initialState.availableVehicles = vehicles;
    let expectedState = {
      ...initialState,
      availableVehicles: [
        {
          name: "bike",
          total_no: 2
        }
      ]
    };
    let action = {
      type: DECREMENT_VEHICLE_COUNT,
      payload: "bike"
    };
    expect(AppReducer(initialState, action)).toEqual(expectedState);
  });
});
