import React, { useEffect } from "react";
import { Row, Col, message } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AutoComplete from "./AutoComplete";
import PlanetItem from "./PlanetItem";
import {
  getPlanets,
  selectPlanet,
  removePlanet
} from "../../actions/planetActions";

const Planets = ({
  maxSelection,
  planets,
  selectedPlanets,
  getPlanets,
  selectPlanet,
  removePlanet
}) => {
  useEffect(() => {
    getPlanets();
  }, []);

  const onPlanetSelect = planet => {
    if (!selectedPlanets.some(p => p.name === planet.name)) {
      if (selectedPlanets.length < maxSelection) {
        selectPlanet(planet);
      } else {
        message.warning("Please remove 1 planet");
      }
    } else {
      message.warning("Planet already exits");
    }
  };

  const onPlanetRemove = planet => {
    removePlanet(planet);
  };

  return (
    <div
      style={{ backgroundColor: "black", position: "relative", top: "27vh" }}
    >
      <Row>
        <Col xs={2} md={8}></Col>
        <Col xs={20} md={8}>
          <AutoComplete suggestions={planets} onPlanetSelect={onPlanetSelect} />
        </Col>
      </Row>
      <Row style={{ padding: "8%" }}>
        {selectedPlanets &&
          selectedPlanets.map((planet, index) => {
            return (
              <Col lg={6} xs={12} md={6} key={index}>
                <PlanetItem
                  planet={planet}
                  key={index}
                  removePlanet={onPlanetRemove}
                />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

Planets.propTypes = {
  maxSelection: PropTypes.number.isRequired,
  planets: PropTypes.array,
  selectedPlanets: PropTypes.array,
  getPlanets: PropTypes.func.isRequired,
  selectPlanet: PropTypes.func.isRequired,
  removePlanet: PropTypes.func.isRequired
};

const mapStateToParams = state => ({
  planets: state.app.planets,
  selectedPlanets: state.app.selectedPlanets
});

export default connect(
  mapStateToParams,
  { getPlanets, selectPlanet, removePlanet }
)(Planets);
