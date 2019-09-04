import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Col } from "antd";
import PropTypes from "prop-types";

import {
  getVehicles,
  incrementVehicleCount,
  decrementVehicleCount
} from "../../actions/vechicleActions";
import "./Vehicle.css";
import PlanetItem from "../planets/PlanetItem";
import AvailableVehicles from "./AvailableVehicles";
import FindFalconeButton from "../falcone/FindFalconeButton";

const Vehicles = ({
  availableVehicles,
  selectedPlanets,
  selectedVehicles,
  getVehicles,
  history,
  maxSelection,
  totalTime,
  incrementVehicleCount,
  decrementVehicleCount
}) => {
  useEffect(() => {
    if (selectedPlanets.length < maxSelection) {
      history.push("/");
    }
    getVehicles();
    // eslint-disable-next-line
  }, []);

  const incrementVehicle = vehicle => {
    incrementVehicleCount(vehicle);
  };

  const decrementVehicle = vehicle => {
    decrementVehicleCount(vehicle);
  };

  return (
    <div className="vehicle-container">
      {totalTime > 0 && (
        <div className="time-div">
          <h3 className="time">Total Time : {totalTime}</h3>
        </div>
      )}
      {selectedPlanets &&
        selectedPlanets.map((planet, index) => {
          return (
            <Col lg={6} xs={24} md={6} key={index}>
              <PlanetItem planet={planet} key={index} removePlanet={() => {}} />
              <AvailableVehicles
                planet={planet}
                vehicles={availableVehicles}
                incrementVehicle={incrementVehicle}
                decrementVehicle={decrementVehicle}
              />
            </Col>
          );
        })}
      <FindFalconeButton
        selectedVehicles={selectedVehicles}
        maxSelection={maxSelection}
      />
    </div>
  );
};

const mapStateToParams = state => ({
  vehicles: state.app.vehicles,
  availableVehicles: state.app.availableVehicles,
  selectedPlanets: state.app.selectedPlanets,
  selectedVehicles: state.app.selectedVehicles,
  totalTime: state.app.totalTime
});

Vehicles.propTypes = {
  availableVehicles: PropTypes.array,
  selectedPlanets: PropTypes.array,
  selectedVehicles: PropTypes.object,
  getVehicles: PropTypes.func.isRequired,
  history: PropTypes.object,
  maxSelection: PropTypes.number.isRequired,
  totalTime: PropTypes.number.isRequired,
  incrementVehicleCount: PropTypes.func.isRequired,
  decrementVehicleCount: PropTypes.func.isRequired
};

export default connect(
  mapStateToParams,
  { getVehicles, incrementVehicleCount, decrementVehicleCount }
)(Vehicles);
