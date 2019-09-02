import React, { useEffect } from "react";
import { connect } from "react-redux";

import { findFalcone } from "../../actions/appActions";

const FindFalcone = ({ token, selectedVehicles, findFalcone }) => {
  let planet_names = [];
  let vehicle_names = [];
  Object.keys(selectedVehicles).map(key => {
    planet_names.push(key);
    vehicle_names.push(selectedVehicles[key]);
  });
  const data = {
    token,
    planet_names,
    vehicle_names
  };
  useEffect(() => {
    findFalcone(data);
  });
  return <div></div>;
};

const mapStateToParams = state => ({
  token: state.app.token,
  selectedVehicles: state.app.selectedVehicles
});

export default connect(
  mapStateToParams,
  { findFalcone }
)(FindFalcone);
