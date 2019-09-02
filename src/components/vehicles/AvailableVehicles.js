import React from "react";
import VehicleItem from "./VehicleItem";

const AvailableVehicles = ({ vehicles, planet }) => {
  let availableVehicles = vehicles.filter(vehicle => {
    return vehicle.max_distance >= planet.distance;
  });

  return (
    <div>
      {availableVehicles &&
        availableVehicles.map(vehicle => {
          return <VehicleItem key={vehicle.name} vehicle={vehicle} />;
        })}
    </div>
  );
};

export default AvailableVehicles;
