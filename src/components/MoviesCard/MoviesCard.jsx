import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ card, handleLikeMovie, handleDeleteMovie }) {
  const { pathname } = useLocation();
  const handleSaveClick = () => {
    delete card.saved;
    handleLikeMovie(card);
    card.saved = true;
  }
  const handleDeleteClick = () => {
    delete card.saved;
    handleDeleteMovie(card._id);
    card.saved = false;
  }

  return (
    <li className="film-card">
      <div className="film-card__container">
        <img className="film-card__headpiece" src={card.image} alt="Заставка фильма" />
        <div className="film-card__information">
          <h2 className="film-card__title">{card.nameRU}</h2>
          {pathname === "/saved-movies" 
            ? <button className="film-card__delete-button" type="button" onClick={handleDeleteClick}></button>
            : <button className="film-card__like-button" type="button" onClick={handleSaveClick}></button>}
        </div>
        <p className="film-card__duration">1ч&#160;42м</p>
      </div>
    </li>
  );
};

export default MoviesCard;
