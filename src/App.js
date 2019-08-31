import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Provider } from "react-redux";
import { store } from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Planets from "./components/planets/Planets";

function App() {
  const { Content } = Layout;
  const maxSelection = 4;
  return (
    <Provider store={store}>
      <div className="App">
        <Layout className="layout">
          <Navbar />
          <Content
            style={{
              padding: "0 50px",
              height: "100vh",
              backgroundColor: "black"
            }}
          >
            <Planets maxSelection={maxSelection} />
          </Content>
          <Footer />
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
