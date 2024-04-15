import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import A_Propos from "./Pages/A_Propos";
import Logement from "./Pages/Logement";
import Erreur from "./Pages/Erreur";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/A_Propos" element={<A_Propos />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<Erreur />} />
    </Routes>
  );
};

export default AppRoutes;
