import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Typing from "react-typing-animation";
import { Row, Col, Avatar } from "antd";
import PropTypes from "prop-types";

import { findFalcone } from "../../actions/appActions";
import { ImageMap } from "../planets/imageMap";
import "./Falcone.css";

const FindFalcone = ({
  token,
  selectedVehicles,
  findFalcone,
  falconeSuccess,
  falconePlanet,
  history
}) => {
  let planet_names = [];
  let vehicle_names = [];
  Object.keys(selectedVehicles).map(key => {
    planet_names.push(key);
    vehicle_names.push(selectedVehicles[key]);
    return key;
  });
  const data = {
    token,
    planet_names,
    vehicle_names
  };
  const find = async data => {
    await findFalcone(data);
    setShow(true);
  };
  useEffect(() => {
    if (!token || !Object.keys(selectedVehicles).length) {
      history.push("/");
    } else {
      find(data);
    }
    // eslint-disable-next-line
  }, []);
  const [planet, setPlanet] = useState(false);
  const [show, setShow] = useState(false);
  const showPlanet = () => {
    if (falconeSuccess) {
      setPlanet(true);
    }
  };

  return (
    <div style={{ position: "relative", top: "15vh", color: "wheat" }}>
      <Row>
        <Col xs={2} md={6}></Col>
        <Col xs={20} md={12}>
          {show && (
            <Typing onFinishedTyping={showPlanet}>
              <span className="fontColor message">
                {falconeSuccess
                  ? "Congratulations!! you've successfully found Falcone in ..."
                  : "Falcone Escaped..."}
              </span>
            </Typing>
          )}
        </Col>
      </Row>
      <Row style={{ paddingTop: "3%" }}>
        <Col>
          {planet && (
            <div>
              <Avatar size={130} src={ImageMap[falconePlanet]} />
              <br />
              <h2 className="fontColor">{falconePlanet}</h2>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

FindFalcone.propTypes = {
  token: PropTypes.string,
  selectedVehicles: PropTypes.object.isRequired,
  findFalcone: PropTypes.func.isRequired,
  falconeSuccess: PropTypes.bool,
  falconePlanet: PropTypes.string,
  history: PropTypes.object.isRequired
};

const mapStateToParams = state => ({
  token: state.app.token,
  selectedVehicles: state.app.selectedVehicles,
  falconeSuccess: state.app.falconeSuccess,
  falconePlanet: state.app.falconePlanet
});

export default connect(
  mapStateToParams,
  { findFalcone }
)(FindFalcone);
