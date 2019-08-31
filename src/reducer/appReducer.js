import {
  GET_PLANETS,
  GET_PLANETS_ERROR,
  GET_VEHICLES,
  SET_LOADING
} from "../actions/types";

const initialState = {
  token: null,
  loading: false,
  planets: [],
  error: null,
  vehicles: [],
  selectedPlanets: [],
  selectedVehicle: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS: {
      return {
        ...state,
        planets: action.payload,
        loading: false
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_PLANETS_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    default:
      return state;
  }
};
