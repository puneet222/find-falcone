import React from "react";
import { Layout } from "antd";
import "./Layout.css";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <div>
      <Footer className="footer">
        <span className="dev">Developed for : </span>
        <span className="name">geektrust.in</span>
      </Footer>
    </div>
  );
};

export default Footer;
