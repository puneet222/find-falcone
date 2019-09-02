import {
  GET_PLANETS,
  GET_PLANETS_ERROR,
  GET_VEHICLES,
  GET_VEHICLES_ERROR,
  SET_LOADING,
  SELECT_PLANET,
  REMOVE_PLANET,
  ASSIGN_VEHICLE,
  UNASSIGN_VEHICLE,
  INCREMENT_VEHICLE_COUNT,
  DECREMENT_VEHICLE_COUNT
} from "../actions/types";
import { stat } from "fs";

const initialState = {
  token: null,
  loading: false,
  planets: [],
  error: null,
  vehicles: [],
  availableVehicles: [],
  selectedPlanets: [],
  selectedVehicles: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS: {
      return {
        ...state,
        planets: action.payload,
        selectedPlanets: action.payload,
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
    case GET_VEHICLES: {
      return {
        ...state,
        vehicles: action.payload,
        availableVehicles: action.payload,
        loading: false
      };
    }
    case GET_VEHICLES_ERROR: {
      return {
        ...state,
        vehicles: [],
        error: action.payload
      };
    }
    case ASSIGN_VEHICLE: {
      let obj = {
        [action.payload.planet.name]: action.payload.vehicle.name
      };
      return {
        ...state,
        selectedVehicles: { ...state.selectedVehicles, ...obj }
      };
    }

    case UNASSIGN_VEHICLE: {
      let { [action.payload.name]: omit, ...res } = state.selectedVehicles;
      return {
        ...state,
        ...res
      };
    }

    case INCREMENT_VEHICLE_COUNT: {
      console.log("increment : ", action.payload);
      return {
        ...state,
        availableVehicles: state.availableVehicles.map(vehicle => {
          if (vehicle.name === action.payload) {
            vehicle.total_no++;
          }
          return vehicle;
        })
      };
    }

    case DECREMENT_VEHICLE_COUNT: {
      return {
        ...state,
        availableVehicles: state.availableVehicles.map(vehicle => {
          if (vehicle.name === action.payload) {
            vehicle.total_no--;
          }
          return vehicle;
        })
      };
    }

    default:
      return state;
  }
};
