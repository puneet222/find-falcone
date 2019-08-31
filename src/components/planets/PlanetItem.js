import React from "react";
import PropTypes from "prop-types";
import { ImageMap } from "./imageMap";

const PlanetItem = ({ planet, removePlanet }) => {
  return (
    <div style={{ color: "white" }} onClick={() => removePlanet(planet)}>
      <img alt={planet.name} width={100} src={ImageMap[planet.name]} />
      <h5 className="text-center">{planet.name}</h5>
      <h5 className="text-center">Distance : {planet.distance}</h5>
    </div>
  );
};

PlanetItem.propTypes = {
  planet: PropTypes.object.isRequired,
  removePlanet: PropTypes.func.isRequired
};

export default PlanetItem;
