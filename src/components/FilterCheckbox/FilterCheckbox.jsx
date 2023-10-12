import "./FilterCheckbox.css";

function FilterCheckbox({ isChecked, handleChange }) {
  return (
    <label className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" onChange={handleChange} checked={isChecked}/>
      <div className="filter-checkbox__style"></div>
      Короткометражки
    </label>
  );
};

export default FilterCheckbox;
