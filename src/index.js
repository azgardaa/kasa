import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Accueil from "./composants/Accueil";
import A_Propos from "./composants/A_Propos";
import Erreur from "./composants/A_Propos";
import Logement from "./composants/Logement";
import Header from "./composants/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/A_Propos" element={<A_Propos />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
document.getElementById("root");
