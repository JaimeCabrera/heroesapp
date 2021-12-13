import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const NavBar = () => {

  const { user, dispatch } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login', { replace: true })
    dispatch({ type: types.logout })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top shadow-lg">
      <div className="container">
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
          <span className="nav-item nav-link text-primary">{user.name}</span>
          <button className="btn btn-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
