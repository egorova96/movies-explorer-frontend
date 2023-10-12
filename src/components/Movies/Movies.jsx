import "./Movies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies({
  allFilms,
  handleSubmitSearch,
  isChecked,
  setIsChecked,
  searchTerm,
  setSearchTerm,
  handleChange,
  handleChangeInput,
  setErrorPopupOpened,
  setErrorMessage,
  showFilms,
  handleLikeMovie
}) {
  return (
    <section className="movies">
      <SearchForm
          handleSubmitSearch={handleSubmitSearch}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleChange={handleChange}
          handleChangeInput={handleChangeInput}
          setErrorPopupOpened={setErrorPopupOpened}
          setErrorMessage={setErrorMessage}
      />
      <MoviesCardList allFilms={allFilms} showFilms={showFilms} handleLikeMovie={handleLikeMovie}/>
    </section>
  );
};

export default Movies;
