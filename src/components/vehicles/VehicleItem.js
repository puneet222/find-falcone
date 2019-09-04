import React, { useState } from "react";
import { Avatar, Badge, Row, Col, message } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  unassignVehicle,
  assignVehicle,
  updateTime
} from "../../actions/vechicleActions";
import { ImageMap } from "./imageMap";

const VehicleItem = ({
  vehicle,
  planet,
  incrementVehicle,
  decrementVehicle,
  selectedVehicles,
  assignVehicle,
  unassignVehicle,
  updateTime,
  vehicles,
  totalTime
}) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  const getVehicleSpeed = vehicle => {
    let v = vehicles.filter(v => v.name === vehicle);
    return v ? v[0]["speed"] : -1;
  };
  const getTime = (planet, vehicle) => {
    let s = planet.distance / getVehicleSpeed(vehicle);
    return s;
  };
  const onClick = () => {
    if (vehicle.total_no > 0) {
      let time = totalTime;
      if (selectedVehicles[planet.name]) {
        incrementVehicle(selectedVehicles[planet.name]);
        unassignVehicle(planet);
        time -= getTime(planet, selectedVehicles[planet.name]);
      }
      assignVehicle(planet, vehicle);
      decrementVehicle(vehicle.name);
      time += getTime(planet, vehicle.name);
      updateTime(time);
    } else {
      message.warning("Insufficient Quantity");
    }
  };
  let divClass = `commonStyle ${
    selectedVehicles[planet.name] === vehicle.name
      ? "hoverStyle"
      : hover
      ? "hoverStyle"
      : "commonStyle"
  }`;
  return (
    <div
      className={divClass}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={onClick}
      key={vehicle.name}
    >
      <Row>
        <Col xs={6} md={6}>
          <Avatar src={ImageMap[vehicle.name]} />
        </Col>
        <Col xs={12} md={12}>
          {vehicle.name}
        </Col>
        <Col xs={6} md={6}>
          <Badge count={vehicle.total_no} />
        </Col>
      </Row>
    </div>
  );
};

VehicleItem.propTypes = {
  vehicle: PropTypes.object.isRequired,
  planet: PropTypes.object.isRequired,
  incrementVehicle: PropTypes.func.isRequired,
  decrementVehicle: PropTypes.func.isRequired,
  selectedVehicles: PropTypes.object,
  assignVehicle: PropTypes.func.isRequired,
  unassignVehicle: PropTypes.func.isRequired,
  updateTime: PropTypes.func.isRequired,
  vehicles: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  selectedVehicles: state.app.selectedVehicles,
  totalTime: state.app.totalTime,
  vehicles: state.app.vehicles
});

export default connect(
  mapStateToProps,
  { assignVehicle, unassignVehicle, updateTime }
)(VehicleItem);
