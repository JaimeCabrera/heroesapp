import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "../components/login/LoginPage";
import { MarvelPage } from "../components/marvel/MarvelPage";
import { NavBar } from "../components/ui/NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MarvelPage />} />
        </Routes>
      </div>
    </Router>
  );
};
