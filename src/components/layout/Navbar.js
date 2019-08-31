import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const Navbar = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div style={{ color: "white" }}>Finding Falcone</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      ></Menu>
    </Header>
  );
};

export default Navbar;
