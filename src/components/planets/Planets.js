import React, { useEffect } from "react";
import { Row, Col, message, Button } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import AutoComplete from "./AutoComplete";
import PlanetItem from "./PlanetItem";
import {
  getPlanets,
  selectPlanet,
  removePlanet
} from "../../actions/planetActions";
import "./Planet.css";
import { getToken } from "../../actions/appActions";

const Planets = ({
  maxSelection,
  planets,
  selectedPlanets,
  getPlanets,
  selectPlanet,
  removePlanet,
  getToken
}) => {
  useEffect(() => {
    getToken();
    getPlanets();
    // eslint-disable-next-line
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
    <div className="planets-container">
      <Row>
        <Col>
          <div className="planets-info">
            Flacone is escaped to some other planet... <br />
            Pick you planets and start searching...
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={2} md={8}></Col>
        <Col xs={20} md={8}>
          <AutoComplete suggestions={planets} onPlanetSelect={onPlanetSelect} />
        </Col>
      </Row>
      <Row style={{ padding: "4%" }}>
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
      {selectedPlanets.length > 0 && (
        <h4 className="touch-info">Click to remove the planets</h4>
      )}
      {selectedPlanets.length === maxSelection && (
        <Link to="/vehicles">
          <Button
            type="primary"
            shape="round"
            icon="cloud-upload"
            size={"large"}
          >
            Pick Rockets
          </Button>
        </Link>
      )}
    </div>
  );
};

Planets.propTypes = {
  maxSelection: PropTypes.number.isRequired,
  planets: PropTypes.array,
  selectedPlanets: PropTypes.array,
  getPlanets: PropTypes.func.isRequired,
  selectPlanet: PropTypes.func.isRequired,
  removePlanet: PropTypes.func.isRequired,
  getToken: PropTypes.func.isRequired
};

const mapStateToParams = state => ({
  planets: state.app.planets,
  selectedPlanets: state.app.selectedPlanets
});

export default connect(
  mapStateToParams,
  { getPlanets, selectPlanet, removePlanet, getToken }
)(Planets);
