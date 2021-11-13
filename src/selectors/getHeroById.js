import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
  //para encontrar el id
  return heroes.find((heroe) => heroe.id === id);
};
