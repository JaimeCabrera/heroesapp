import React from "react";
import { HeroeList } from "../heroes/HeroeList";

export const MarvelPage = () => {
  return (
    <div>
      <h1>Marvel Heroes</h1>
      <HeroeList publisher="Marvel Comics" />
    </div>
  );
};
