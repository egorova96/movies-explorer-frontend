import "./SearchForm.css";

import magnifier from "../../images/magnifier.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__container">
          <img className="search__image" src={magnifier} alt="Лупа"></img>
          <div className="search__input-conteiner">
            <input
              id="input-search"
              className="search__input"
              type="text"
              name="search"
              required
              placeholder="Фильм"
              autoComplete="off"
            />
            <span className="input-search-error search__input-error"></span>
          </div>
          <button type="submit" className="search__button">Найти</button>
        </div>
        <div className="search__icon"></div>
        <div className="search__checkbox">
          <FilterCheckbox />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;