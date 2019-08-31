import {
  GET_PLANETS,
  GET_PLANETS_ERROR,
  GET_VEHICLES,
  SET_LOADING,
  SELECT_PLANET,
  REMOVE_PLANET
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
    case SELECT_PLANET: {
      return {
        ...state,
        selectedPlanets: [...state.selectedPlanets, action.payload]
      };
    }
    case REMOVE_PLANET: {
      return {
        ...state,
        selectedPlanets: state.selectedPlanets.filter(
          planet => planet.name !== action.payload.name
        )
      };
    }
    default:
      return state;
  }
};
