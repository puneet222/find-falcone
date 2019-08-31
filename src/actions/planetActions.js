import {
  GET_PLANETS,
  SET_LOADING,
  GET_PLANETS_ERROR,
  SELECT_PLANET,
  REMOVE_PLANET
} from "./types";
import { GET_PLANETS_API } from "./apis";
import axios from "axios";

// get all planets
export const getPlanets = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get(GET_PLANETS_API);
    console.log(res);
    dispatch({
      type: GET_PLANETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_PLANETS_ERROR,
      payload: err
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const selectPlanet = planet => {
  return {
    type: SELECT_PLANET,
    payload: planet
  };
};

export const removePlanet = planet => {
  return {
    type: REMOVE_PLANET,
    payload: planet
  };
};
