import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPlanets } from "../../actions/planetActions";

const Planets = ({ getPlanets }) => {
  useEffect(() => {
    getPlanets();
  }, []);
  return <div></div>;
};

export default connect(
  null,
  { getPlanets }
)(Planets);
