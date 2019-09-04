import React from "react";
import { Layout, Menu } from "antd";
import "./Layout.css";

const Navbar = () => {
  const { Header } = Layout;
  return (
    <Header className="header">
      <div style={{ color: "white" }}>Finding Falcone</div>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: "64px" }}
      ></Menu>
    </Header>
  );
};

export default Navbar;
