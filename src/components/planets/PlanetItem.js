import React from "react";
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

export default PlanetItem;
