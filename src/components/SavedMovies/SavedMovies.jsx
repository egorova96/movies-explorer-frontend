import "./SavedMovies.css";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({
  showFilms,
  handleDeleteMovie,
  handleSubmitSearch,
  searchTerm,
  isChecked,
  handleChange,
  handleChangeInput }) {
  return (
    <section className="saved-movies">
      <SearchForm handleSubmitSearch={handleSubmitSearch} searchTerm={searchTerm} isChecked={isChecked} handleChange={handleChange} handleChangeInput={handleChangeInput}/>
      <MoviesCardList showFilms={showFilms} handleDeleteMovie={handleDeleteMovie}/>
    </section>
  );
};

export default SavedMovies;
