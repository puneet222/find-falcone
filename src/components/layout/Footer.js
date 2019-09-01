import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <div>
      <Footer
        style={{
          textAlign: "center",
          width: "100vw",
          position: "fixed",
          bottom: "0px"
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </div>
  );
};

export default Footer;
