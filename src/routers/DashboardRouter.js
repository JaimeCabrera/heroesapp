import React from "react";
import { Route, Routes } from "react-router-dom";

import { DcPage } from "../components/dc/DcPage";
import { HeroPage } from "../components/heroes/HeroPage";
import { MarvelPage } from "../components/marvel/MarvelPage";
import { SearchPage } from "../components/search/SearchPage";
import { NavBar } from "../components/ui/NavBar";

export const DashboardRouter = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/marvel" element={<MarvelPage />} />
          <Route path="/heroe/:heroeId" element={<HeroPage />} />
          <Route path="/dc" element={<DcPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<MarvelPage />} />
        </Routes>
      </div>
    </>
  );
};
