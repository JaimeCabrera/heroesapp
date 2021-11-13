import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { LoginPage } from "../components/login/LoginPage";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/*" element={<DashboardRouter />} />
      </Routes>
    </Router>
  );
};
