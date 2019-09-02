import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const FindFalconeButton = ({ selectedVehicles, maxSelection }) => {
  const buttonStyle = {
    position: "fixed",
    zIndex: "90",
    bottom: "15%",
    right: "2%"
  };
  return (
    Object.keys(selectedVehicles).length === maxSelection && (
      <Link to="/findFalcone">
        <Button
          style={buttonStyle}
          type="danger"
          shape="round"
          icon="search"
          size={"large"}
        >
          Find Falcone
        </Button>
      </Link>
    )
  );
};

export default FindFalconeButton;
