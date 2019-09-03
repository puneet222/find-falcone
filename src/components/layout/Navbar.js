import React from "react";
import { Layout, Menu } from "antd";

const Navbar = () => {
  const { Header } = Layout;
  return (
    <Header style={{ position: "fixed", zIndex: 99, width: "100%" }}>
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
