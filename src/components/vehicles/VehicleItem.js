import React, { useState } from "react";
import { Avatar, Badge, Row, Col } from "antd";

import { ImageMap } from "./imageMap";

const VehicleItem = ({ vehicle }) => {
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
  return (
    <div
      style={hover ? hoverListStyle : listStyle}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
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

export default VehicleItem;
