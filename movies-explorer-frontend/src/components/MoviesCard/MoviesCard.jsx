import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import filmHeadpiece from "../../images/headpiece.jpg";

function MoviesCard() {
  const { pathname } = useLocation();
  return (
    <li className="film-card">
      <div className="film-card__container">
        <img className="film-card__headpiece" src={filmHeadpiece} alt="Заставка фильма" />
        <div className="film-card__information">
          <h2 className="film-card__title">33 слова о дизайне</h2>
          {pathname === "/saved-movies" 
            ? <button className="film-card__delete-button" type="button"></button>
            : <button className="film-card__like-button" type="submit"></button>}
        </div>
        <p className="film-card__duration">1ч&#160;42м</p>
      </div>
    </li>
  );
};

export default MoviesCard;