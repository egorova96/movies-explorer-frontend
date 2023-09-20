import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

function MoviesCardList() {
  const { pathname } = useLocation();
  return (
    <section className="film-cards">
      <ul className="film-cards__list">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <button className={`film-cards__further-button ${pathname !== "/saved-movies" ? "" : "film-cards__further-button_type_no"}`} type="button">Еще</button>
    </section>
  );
};

export default MoviesCardList;