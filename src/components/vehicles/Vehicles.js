import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Col } from "antd";

import {
  getVehicles,
  incrementVehicleCount,
  decrementVehicleCount
} from "../../actions/vechicleActions";
import PlanetItem from "../planets/PlanetItem";
import AvailableVehicles from "./AvailableVehicles";

const Vehicles = ({
  vehicles,
  availableVehicles,
  selectedPlanets,
  getVehicles,
  history,
  maxSelection,
  incrementVehicleCount,
  decrementVehicleCount
}) => {
  useEffect(() => {
    if (selectedPlanets.length < maxSelection) {
      history.push("/");
    }
    getVehicles();
  }, []);

  const incrementVehicle = vehicle => {
    incrementVehicleCount(vehicle);
  };

  const decrementVehicle = vehicle => {
    decrementVehicleCount(vehicle);
  };

  return (
    <div
      style={{ backgroundColor: "black", position: "relative", top: "15vh" }}
    >
      {selectedPlanets &&
        selectedPlanets.map((planet, index) => {
          return (
            <Col lg={6} xs={24} md={6} key={index}>
              <PlanetItem planet={planet} key={index} />
              <AvailableVehicles
                planet={planet}
                vehicles={availableVehicles}
                incrementVehicle={incrementVehicle}
                decrementVehicle={decrementVehicle}
              />
            </Col>
          );
        })}
    </div>
  );
};

const mapStateToParams = state => ({
  vehicles: state.app.vehicles,
  availableVehicles: state.app.availableVehicles,
  selectedPlanets: state.app.selectedPlanets
});

export default connect(
  mapStateToParams,
  { getVehicles, incrementVehicleCount, decrementVehicleCount }
)(Vehicles);
