import React, { useEffect } from "react";
import { Row, Col } from "antd";
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
        console.log("please remove one planet");
      }
    } else {
      console.log("planet already exits");
    }
  };

  const onPlanetRemove = planet => {
    removePlanet(planet);
  };

  return (
    <div
      style={{ backgroundColor: "black", position: "relative", top: "30vh" }}
    >
      <AutoComplete suggestions={planets} onPlanetSelect={onPlanetSelect} />
      <Row>
        {selectedPlanets &&
          selectedPlanets.map((planet, index) => {
            return (
              <Col span={6} key={index}>
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
