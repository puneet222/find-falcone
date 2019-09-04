import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FindFalconeButton = ({ selectedVehicles, maxSelection }) => {
  return (
    Object.keys(selectedVehicles).length === maxSelection && (
      <Link to="/findFalcone">
        <Button
          className="falcone-button"
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

FindFalconeButton.propTypes = {
  selectedVehicles: PropTypes.object.isRequired,
  maxSelection: PropTypes.number.isRequired
};

export default FindFalconeButton;
