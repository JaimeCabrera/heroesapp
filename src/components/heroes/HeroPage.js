import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroPage = () => {
  const navigate = useNavigate();
  const { heroeId } = useParams();

  // use memo para memorixar procesos pesados
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  // const hero = getHeroById(heroeId);
  if (!hero) {
    return <Navigate to="/" />;
  }
  const handleReturn = () => {
    // si existe navegacion retorna al anteriro caso contrario a la pagina principal
    if (navigate.length <= 1) {
      navigate("/");
    } else {
      navigate(-1);
    }
  };
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  return (
    <div className="row mt-5 animate__animated animate__fadeIn">
      <div className="col-sm-6 col-md-4">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-sm-6 col-md-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearence:</b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-secondary" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
