import React, { useState } from "react";
import { Avatar, Badge, Row, Col, message, Button } from "antd";
import { connect } from "react-redux";
import { unassignVehicle, assignVehicle } from "../../actions/vechicleActions";

import { ImageMap } from "./imageMap";

const VehicleItem = ({
  vehicle,
  planet,
  incrementVehicle,
  decrementVehicle,
  selectedVehicles,
  assignVehicle,
  unassignVehicle
}) => {
  const [hover, setHover] = useState(false);
  let commonStyle = {
    border: "wheat solid 1px",
    borderRadius: "20px",
    padding: "5px",
    color: "wheat",
    margin: "10px"
  };
  const listStyle = {
    ...commonStyle
  };
  const hoverListStyle = {
    ...commonStyle,
    background: "blue",
    cursor: "pointer"
  };
  const toggleHover = () => {
    setHover(!hover);
  };
  const onClick = () => {
    console.log(selectedVehicles);
    if (vehicle.total_no > 0) {
      if (selectedVehicles[planet.name]) {
        incrementVehicle(selectedVehicles[planet.name]);
        unassignVehicle(planet);
      }
      assignVehicle(planet, vehicle);
      decrementVehicle(vehicle.name);
    } else {
      message.warning("Insufficient Quantity");
    }
    console.log(selectedVehicles);
  };
  return (
    <div
      style={
        selectedVehicles[planet.name] === vehicle.name
          ? hoverListStyle
          : hover
          ? hoverListStyle
          : listStyle
      }
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

const mapStateToProps = state => ({
  selectedVehicles: state.app.selectedVehicles
});

export default connect(
  mapStateToProps,
  { assignVehicle, unassignVehicle }
)(VehicleItem);
