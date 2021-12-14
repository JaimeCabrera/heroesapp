import React, { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../heroes/HeroCard";

export const SearchPage = () => {
  // obtener el parametro de busqueda
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  const [formValues, handleInputChange, reset] = useForm({ searchTxt: "" });
  const navigate = useNavigate();
  const { searchTxt } = formValues;

  const handleSearch = (e) => {
    setSearchParams({ q: searchTxt });
    e.preventDefault();
    reset();
    navigate(`/search?q=${searchTxt}`);
  };
  // usando el useMemo
  const heroResult = useMemo(() => getHeroesByName(q), [q]);
  // const heroResult = getHeroesByName(q);
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <h4>Search From</h4>
          <hr />
          <form className="form-horizontal" onSubmit={handleSearch}>
            <input
              type="text"
              value={searchTxt}
              onChange={handleInputChange}
              name="searchTxt"
              placeholder="find your hero"
              className="form-control"
              autoComplete="off"
            />
            <div className="d-grid gap-1">
              <button
                className="btn btn-outline-primary btn-block mt-2"
                type="submit"
              >
                Search...
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6 mt-5">
          <h4>Results</h4>
          <hr />
          {q === null && <div className="alert alert-info">Search a hero</div>}
          {q !== null && heroResult.length === 0 && (
            <div className="alert alert-danger">
              {" "}
              <b>{q}</b> There is not a hero
            </div>
          )}
          {heroResult.map((heroe) => {
            return <HeroCard key={heroe.id} {...heroe} />;
          })}
        </div>
      </div>
    </div>
  );
};
