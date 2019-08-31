import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Planets from "./components/planets/Planets";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Planets />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
