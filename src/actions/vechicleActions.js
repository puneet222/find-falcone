import { GET_VEHICLES, SET_LOADING, GET_VEHICLES_ERROR } from "./types";
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

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
