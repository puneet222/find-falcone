import React from "react";
import PropTypes from "prop-types";
import { ImageMap } from "./imageMap";

const PlanetItem = ({ planet, removePlanet }) => {
  const infoStyle = {
    color: "white",
    margin: "0px"
  };
  return (
    <div style={{ color: "white" }} onClick={() => removePlanet(planet)}>
      <img alt={planet.name} width={100} src={ImageMap[planet.name]} />
      <h4 style={infoStyle}>
        <strong>{planet.name}</strong>
      </h4>
      <h5 style={infoStyle}>Distance : {planet.distance}</h5>
    </div>
  );
};

PlanetItem.propTypes = {
  planet: PropTypes.object.isRequired,
  removePlanet: PropTypes.func.isRequired
};

export default PlanetItem;
