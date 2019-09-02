import axios from "axios";

import {
  GET_TOKEN,
  APP_ERROR,
  FIND_FALCONE_SUCCESS,
  FIND_FALCONE_FAIL
} from "./types";
import { GET_TOKEN_API, FIND_FALCON_API } from "./apis";

export const getToken = () => async dispatch => {
  try {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };
    let res = await axios.post(GET_TOKEN_API, {}, config);
    dispatch({
      type: GET_TOKEN,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: APP_ERROR,
      payload: err
    });
  }
};

export const findFalcone = data => async dispatch => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    let res = await axios.post(FIND_FALCON_API, data, config);
    if (res.data.status === "success") {
      dispatch({
        type: FIND_FALCONE_SUCCESS,
        payload: res.data.planet_name
      });
    } else {
      dispatch({
        type: FIND_FALCONE_FAIL
      });
    }
  } catch (err) {
    dispatch({
      type: APP_ERROR,
      payload: err
    });
  }
};
