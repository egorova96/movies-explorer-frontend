import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" />
      <div className="filter-checkbox__style"></div>
      Короткометражки
    </label>
  );
};

export default FilterCheckbox;