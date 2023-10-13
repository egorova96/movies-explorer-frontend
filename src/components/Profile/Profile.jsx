import "./Profile.css";

import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import { useContext, useEffect, useState } from "react";

function Profile({ onLogout, handleUpdateUser, buttonText }) {
  const user = useContext(CurrentUserContext);
  const [error, setError] = useState("");
  const {isValid, setValues, values, handleChange, setIsValid} = useFormAndValidation();
  const [disabledInput, setDisabledInput] = useState(true);
  
  useEffect(() => {
    if (user) {
      setValues({
        name: user.name,
        email: user.email
      });
    }
  }, [user, setValues]);


  function handleProfileChanges(evt) {
    evt.preventDefault();
    setDisabledInput(false)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsValid(false);
    handleUpdateUser({
      name: values.name.trimStart(),
      email: values.email
    })
  };

  function profileError() {
    setError("");
  };

  useEffect(() => {
    setError("");
  }, []);

  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <h1 className="profile__title">Привет, {user.name}!</h1>
        <div className="profile__form-input-container">
          <div className="profile__input profile__input_type_name">
            <p className="profile__text">Имя</p>
            <input 
              className="profile__line" placeholder="Введите имя" id="input-name"
              name="name" minLength="2" maxLength="40"
              type="name" onFocus={profileError} value={values.name || ""}
              disabled={disabledInput ? true : false} onChange={handleChange}
              required
               />
          </div>
          <div className="profile__input profile__input_type_email">
            <p className="profile__text">E-mail</p>
            <input
              className="profile__line" placeholder="Введите E-mail" id="input-email"
              name="email" type="email" minLength="8" onFocus={profileError}
              disabled={disabledInput ? true : false} value={values.email || ""}
              onChange={handleChange}
              required
              />
          </div>
        </div>
        <div className="profile__buttons-container">
          <span className="profile__error" type="text">{error}</span>
          {disabledInput
          ? <button className="profile__edit-button" type="button" onClick={handleProfileChanges}>Редактировать</button>
          : <button className={
            `profile__save-button ${!isValid || (values.name === user.name && values.email === user.email) 
              ? "profile__save-button_disabled"
              : ""}`}
              disabled={!isValid || (values.name === user.name && values.email === user.email)}
              type="submit">{buttonText}</button>}

          <button onClick={onLogout} className="profile__signout-button" type="button">Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
