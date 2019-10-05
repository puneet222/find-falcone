import {
  GET_VEHICLES,
  SET_LOADING,
  ASSIGN_VEHICLE,
  UNASSIGN_VEHICLE,
  INCREMENT_VEHICLE_COUNT,
  DECREMENT_VEHICLE_COUNT,
  UPDATE_TIME
} from "../types";
import { GET_VEHICLES_API } from "../apis";
import {
  getVehicles,
  incrementVehicleCount,
  decrementVehicleCount,
  assignVehicle,
  unassignVehicle,
  setLoading,
  updateTime
} from "../vechicleActions";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Vehicle Actions", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const vehicleAPIReponse = [{ name: "vehicle #1", name: "vehicle #2" }];

  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(GET_VEHICLES_API, {
      status: 200,
      response: vehicleAPIReponse
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should create the action GET_VEHICLES", async done => {
    const expectedAction = [
      {
        type: GET_VEHICLES,
        payload: vehicleAPIReponse
      }
    ];
    const store = mockStore({});
    await store.dispatch(getVehicles()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
    done();
  });

  it("should create the action INCREMENT_VEHICLE_COUNT", () => {
    const vehicle = { name: "car" };
    const expectedAction = {
      type: INCREMENT_VEHICLE_COUNT,
      payload: vehicle
    };
    expect(incrementVehicleCount(vehicle)).toEqual(expectedAction);
  });

  it("should create the action DECREMENT_VEHICLE_COUNT", () => {
    const vehicle = { name: "car" };
    const expectedAction = {
      type: DECREMENT_VEHICLE_COUNT,
      payload: vehicle
    };
    expect(decrementVehicleCount(vehicle)).toEqual(expectedAction);
  });

  it("should create the action ASSIGN_VEHICLE", () => {
    const planet = { name: "mars" };
    const vehicle = { name: "car" };
    const expectedAction = {
      type: ASSIGN_VEHICLE,
      payload: { planet, vehicle }
    };
    expect(assignVehicle(planet, vehicle)).toEqual(expectedAction);
  });

  it("should create the action UNASSIGN_VEHICLE", () => {
    const planet = { name: "mars" };
    const expectedAction = {
      type: UNASSIGN_VEHICLE,
      payload: planet
    };
    expect(unassignVehicle(planet)).toEqual(expectedAction);
  });

  it("should create the action SET_LOADING", () => {
    expect(setLoading()).toEqual({ type: SET_LOADING });
  });

  it("should create the action UPDATE_TIME", () => {
    const time = "wrong";
    const expectedAction = {
      type: UPDATE_TIME,
      payload: time
    };
    expect(updateTime(time)).toEqual(expectedAction);
  });
});
