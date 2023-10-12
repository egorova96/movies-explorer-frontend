import "../Form/Form.css";
import Form from "../Form/Form";

import { Link } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";


function Register({ handleRegister }) {
  const {values, handleChange, errors, isValid} = useFormAndValidation();

  function handleRegistrationSubmit(evt) {
    evt.preventDefault();
    const { name, email, password } = values;
    handleRegister(name, email, password);
  };
  return (
    <section className="auth">
      <Form 
      title="Добро пожаловать!"
      isValid={isValid}
      name="register"
      onSubmit={handleRegistrationSubmit}
      >
        <label className="auth__element">
          <p className="auth__text">Имя</p>
          <input
            className="auth__input" type="name" value={values.name || ""}
            id="input-name" name="name" placeholder="Введите имя"
            onChange={handleChange} minLength="2" maxLength="40" 
            pattern="[а-яА-ЯёЁa-zA-Z\s\-]{2,40}"
            required
          />
          <span className="input-name-error auth__err" type="text">{errors.name}</span>
        </label>
        <label className="auth__element">
          <p className="auth__text">E-mail</p>
          <input
            className="auth__input" type="email" value={values.email || ""}
            id="input-email" name="email" placeholder="Введите email"
            onChange={handleChange} minLength="2" maxLength="40"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            required
          />
          <span className="input-email-error auth__error" type="text">{errors.email}</span>
          </label>
          <label className="auth__element">
          <p className="auth__text">Пароль</p>
            <input
              className={`auth__input ${
                errors.password ? "auth__input_type_red" : ""
              }`}
              name="password" id="input-password" type="password"
              placeholder="Введите Пароль" minLength="8" maxLength="16"
              onChange={handleChange}
              value={values.password || ""}
              required
            />
            <span className="input-password-error auth__err" type="text">{errors.password}</span>
          </label>
      <div className="auth__container">
        <span className="auth__error auth__error_type_server" type="text"></span>
        <button 
        className={`auth__button ${isValid ? "" : "auth__button_disabled"}`}
        disabled={!isValid} 
        type="submit">Зарегистрироваться
        </button>
          <p className="auth__question">
            Уже зарегистрированы?&nbsp;&nbsp;
            <Link to="/signin" className="auth__register-link">
              Войти
            </Link>
          </p>
      </div>
      </Form>
    </section>
  );
};

export default Register;