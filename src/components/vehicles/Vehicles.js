import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Col } from "antd";

import { getVehicles } from "../../actions/vechicleActions";
import PlanetItem from "../planets/PlanetItem";
import AvailableVehicles from "./AvailableVehicles";

const Vehicles = ({
  vehicles,
  selectedPlanets,
  getVehicles,
  history,
  maxSelection
}) => {
  useEffect(() => {
    if (selectedPlanets.length < maxSelection) {
      history.push("/");
    }
    getVehicles();
  }, []);
  return (
    <div
      style={{ backgroundColor: "black", position: "relative", top: "15vh" }}
    >
      {selectedPlanets &&
        selectedPlanets.map((planet, index) => {
          return (
            <Col lg={6} xs={24} md={6} key={index}>
              <PlanetItem planet={planet} key={index} />
              <AvailableVehicles planet={planet} vehicles={vehicles} />
            </Col>
          );
        })}
    </div>
  );
};

const mapStateToParams = state => ({
  vehicles: state.app.vehicles,
  selectedPlanets: state.app.selectedPlanets
});

export default connect(
  mapStateToParams,
  { getVehicles }
)(Vehicles);
