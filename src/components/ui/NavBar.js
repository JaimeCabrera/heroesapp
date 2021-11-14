import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          HeroesApp
        </Link>
        <ul className="navbar-nav me-auto  mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/marvel">
              Marvel
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dc">
              DC
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search">
              Search
            </NavLink>
          </li>
        </ul>
        <div className="d-flex">
          <NavLink to="/login" className="btn btn-outline-success">
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
