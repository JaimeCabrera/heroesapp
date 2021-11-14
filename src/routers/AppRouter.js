import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import { LoginPage } from "../components/login/LoginPage";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

  const { user } = useContext(AuthContext)

  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        {/* <Route exact path="/login" element={<LoginPage />} /> */}
        <Route path="/login" element={<PublicRoute isAuth={user.auth} element={<LoginPage />} />} />
        < Route path="/*" element={<PrivateRouter isAuth={user.auth} element={<DashboardRouter />} />} />
      </Routes>
    </Router>
  );
};
