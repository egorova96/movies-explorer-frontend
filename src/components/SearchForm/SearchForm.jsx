import "./SearchForm.css";
import { useLocation } from 'react-router-dom';
import magnifier from "../../images/magnifier.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({
  handleSubmitSearch,
  searchTerm,
  isChecked,
  setIsChecked,
  handleChange,
  handleChangeInput,
  setErrorPopupOpened,
  setErrorMessage}) {
  const location = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    // if (!searchTerm && location.pathname === "/movies") {
    //   setErrorMessage("Нужно ввести ключевое слово");
    // }
    handleSubmitSearch(searchTerm, isChecked);
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <div className="search__container">
          <img className="search__image" src={magnifier} alt="Лупа"></img>
          <div className="search__input-container">
            <input
              className="search__input"
              type="text"
              placeholder="Фильм"
              value={searchTerm || ""}
              onChange={handleChangeInput}
              required
            />
            <span className="input-search-error search__input-error"></span>
          </div>
          <button type="submit" className="search__button" onClick={handleSubmit}>Найти</button>
        </div>
        <div className="search__icon"></div>
        <div className="search__checkbox">
          <FilterCheckbox isChecked={isChecked} handleChange={handleChange}/>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
