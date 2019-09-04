import React from "react";
import PropTypes from "prop-types";
import { ImageMap } from "./imageMap";
import "./Planet.css";

const PlanetItem = ({ planet, removePlanet }) => {
  return (
    <div className="planet-item" onClick={() => removePlanet(planet)}>
      <img alt={planet.name} width={100} src={ImageMap[planet.name]} />
      <h4 className="info-style">
        <strong>{planet.name}</strong>
      </h4>
      <h5 className="info-style">Distance : {planet.distance}</h5>
    </div>
  );
};

PlanetItem.propTypes = {
  planet: PropTypes.object.isRequired,
  removePlanet: PropTypes.func
};

export default PlanetItem;
