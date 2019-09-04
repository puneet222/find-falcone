import React from "react";
import { Layout } from "antd";
import "./Layout.css";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <div>
      <Footer className="footer">
        <span className="dev">Developed by : </span>
        <span className="name">Puneet Aggarwal</span>
      </Footer>
    </div>
  );
};

export default Footer;
