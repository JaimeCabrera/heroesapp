import React from "react";
import { Link } from "react-router-dom";


const heroePath = require.context('../../assets/heroes')

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <>
      <div className="card animate__animated animate__fadeIn m-2 bg-opacity-75" style={{ maxWidth: 340 }}>
        <img
          src={heroePath(`./${id}.jpg`).default}
          className="card-img-top img-fluid img-thumbnail"
          alt={superhero}
        />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          {alter_ego !== characters && (
            <p className="card-text">{characters}</p>
          )}
          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>
          <Link className="btn btn-secondary btn-sm" to={`/heroe/${id}`}>
            Más...
          </Link>
        </div>
      </div>
    </>
  );
};


