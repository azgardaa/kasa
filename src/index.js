import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./composants/Routes";
import Header from "./composants/layout/Header";
import Footer from "./composants/layout/Footer";
import "./css/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
