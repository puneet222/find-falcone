import React from "react";
import PropTypes from "prop-types";
import VehicleItem from "./VehicleItem";

const AvailableVehicles = ({
  vehicles,
  planet,
  incrementVehicle,
  decrementVehicle
}) => {
  let availableVehicles = vehicles.filter(vehicle => {
    return vehicle.max_distance >= planet.distance;
  });

  return (
    <div>
      {availableVehicles &&
        availableVehicles.map(vehicle => {
          return (
            <VehicleItem
              key={vehicle.name}
              vehicle={vehicle}
              planet={planet}
              incrementVehicle={v => incrementVehicle(v)}
              decrementVehicle={v => decrementVehicle(v)}
            />
          );
        })}
    </div>
  );
};

AvailableVehicles.propTypes = {
  vehicles: PropTypes.array.isRequired,
  planet: PropTypes.object.isRequired,
  incrementVehicle: PropTypes.func.isRequired,
  decrementVehicle: PropTypes.func.isRequired
};

export default AvailableVehicles;
