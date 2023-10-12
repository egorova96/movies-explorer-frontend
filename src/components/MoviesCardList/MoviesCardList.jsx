import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  allFilms,
  showFilms,
  handleLikeMovie,
  handleDeleteMovie
}) 
{
  const [initialAmountFilms, setInitialAmountFilms] = useState(16);
  const { pathname } = useLocation();
  const [width, setWindowWidth] = useState(window.innerWidth);
  const [addCard, setAddCard] = useState(4)

  window.addEventListener("resize", function (evt) {
    setTimeout((evt) => {
      setWindowWidth(window.innerWidth);
    }, 100);
  });
  function handleClickButtonFurther() {
    setInitialAmountFilms(initialAmountFilms + addCard);
  }
  useEffect(() => {
    if (width < 481) {
      setInitialAmountFilms(5);
      setAddCard(2);
    } else if (width < 681) {
      setInitialAmountFilms(5);
      setAddCard(2);
    } else if (width < 769) {
      setInitialAmountFilms(8);
      setAddCard(2);
    } else if (width < 801) {
      setInitialAmountFilms(8);
      setAddCard(2);
    } else if (width < 1046) {
      setInitialAmountFilms(12);
      setAddCard(3);
    } else if (width < 1281) {
      setInitialAmountFilms(16);
      setAddCard(4);
    }
  }, [width]);

  return (
    <section className="film-cards">
      <div className="film-cards__list">
        {showFilms && showFilms.slice(0, initialAmountFilms).map((film) => (
          <MoviesCard 
            card={film}
            key={film.movieId}
            handleLikeMovie={handleLikeMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
          )
        )}
      </div>{pathname === "/movies" && showFilms && initialAmountFilms < showFilms.length && (
        <button 
        type="button"
        className="film-cards__further-button"
        onClick={handleClickButtonFurther}
        >Еще</button>
      )}
    </section>
  );
};
export default MoviesCardList;
