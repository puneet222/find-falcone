import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";
import { Provider } from "react-redux";
import { store } from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Planets from "./components/planets/Planets";
import Vehicles from "./components/vehicles/Vehicles";
import FindFalcone from "./components/falcone/FindFalcone";

function App() {
  const { Content } = Layout;
  const maxSelection = 4;
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Layout className="layout">
            <Navbar />
            <Content
              style={{
                height: "100vh",
                backgroundColor: "black"
              }}
            >
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => <Planets maxSelection={maxSelection} />}
                />
                <Route
                  exact
                  path="/vehicles"
                  render={props => (
                    <Vehicles {...props} maxSelection={maxSelection} />
                  )}
                />
                <Route
                  exact
                  path="/findFalcone"
                  render={props => <FindFalcone {...props} />}
                />
              </Switch>
            </Content>
            {/* <Footer /> */}
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
