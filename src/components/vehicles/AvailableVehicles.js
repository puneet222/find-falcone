import React from "react";
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

export default AvailableVehicles;
