import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./composants/Routes";
import Header from "./composants/layout/Header";
import Footer from "./composants/layout/Footer";
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  </>
);
