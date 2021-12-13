import React, { useMemo } from "react";

import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroeList = ({ publisher }) => {
  // se debe volver a consultar los heroes solo si el publisher cambia

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  // const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="row animate__animated animate__fadeIn animate__fast">
      <>
        {heroes.map((hero) => {
          return (<div className="col-sm-6 col-md-4 ">
            <HeroCard key={hero.id} {...hero} />
          </div>
          );
        })}
      </>
    </div>
  );
};
