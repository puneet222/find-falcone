import {
  GET_VEHICLES,
  SET_LOADING,
  GET_VEHICLES_ERROR,
  ASSIGN_VEHICLE,
  UNASSIGN_VEHICLE,
  INCREMENT_VEHICLE_COUNT,
  DECREMENT_VEHICLE_COUNT,
  UPDATE_TIME
} from "./types";
import { GET_VEHICLES_API } from "./apis";
import axios from "axios";

export const getVehicles = () => async dispatch => {
  try {
    setLoading();
    let res = await axios.get(GET_VEHICLES_API);
    dispatch({
      type: GET_VEHICLES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_VEHICLES_ERROR,
      payload: err
    });
  }
};

export const incrementVehicleCount = vehicle => async dispatch => {
  dispatch({
    type: INCREMENT_VEHICLE_COUNT,
    payload: vehicle
  });
};

export const decrementVehicleCount = vehicle => async dispatch => {
  dispatch({
    type: DECREMENT_VEHICLE_COUNT,
    payload: vehicle
  });
};

export const assignVehicle = (planet, vehicle) => {
  return {
    type: ASSIGN_VEHICLE,
    payload: { planet, vehicle }
  };
};

export const unassignVehicle = planet => {
  return {
    type: UNASSIGN_VEHICLE,
    payload: planet
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const updateTime = time => {
  return {
    type: UPDATE_TIME,
    payload: time
  };
};
