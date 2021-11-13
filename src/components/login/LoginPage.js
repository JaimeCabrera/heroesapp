import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  let navigate = useNavigate();

  const handleLogin = () => {
    navigate("/", { replace: true });
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

// Hola gente :corazón: Les dejo este aviso de una postulación en Instagram de la empresa Blockchain Consultora, no para que se postulen sino para que tomen precaución y tengan cuidado con esta empresa, por lo siguiente:
// Hace un mes, mi pareja, que también es dev, se postulo para este mismo aviso, luego de un largo y duro proceso de selección, quedó para hacer un mes de prueba, en la entrevista se le había preguntado cuanto era su remuneración pretendida (como en cualquier otra empresa), luego de e
//  ese mes, y de muchas irregularidades por parte de esta (presiones, amenazas de descuento del sueldo en caso de no entregar las tareas a tiempo y bien, 0 capacitación y ningún guía ni nadie en quien apoyarse), concurrió su mes de prueba, eran 4 candidatos (contándolo a el), de los cuales a uno lo echaron habiendo trabajado dos semanas y sin darle ni un centavo, luego del mes de prueba, mi pareja le pregunto al jefe (CEO de la "empresa") que cuánto le correspondía ganar, a lo que el le contestó q
// Simplemente comparto esto para que no les pase lo mismo, es jugar con el trabajo, el tiempo y la necesidad de cada uno, si bien mi pareja advirtió todas estas cuestiones, el necesitaba el trabajo, he hizo lo que cualquiera hubiese hecho por un sueldo.
