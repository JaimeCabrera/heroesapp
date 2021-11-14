import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginPage = () => {

  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate();

  // obteniedo el ultimo path antes de logout para regresar 
  const lastPath = localStorage.getItem('lastPath') || '/';

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: { name: 'Jaime' }
    })
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container">
      <div className="row mt-5 ">
        <div className="col-8 mx-auto">
          <div className="card shadow">
            <div className="card-header">Ingresa tus credenciales</div>
            <div className="card-body">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="******"
                />
              </div>

              <button
                className="btn btn-primary btn-block"
                onClick={handleLogin}
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

