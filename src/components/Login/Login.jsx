
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import "../Form/Form.css";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Login({ handleLogin }) {
  const {values, handleChange, errors, isValid} = useFormAndValidation();

  function handleAuthSubmit(evt) {
    evt.preventDefault();
    const { email, password } = values;
    handleLogin(email, password);
  }

  return (
    <section className="auth">
      <Form name="login" title="Рады видеть!" isValid={isValid} onSubmit={handleAuthSubmit}>
        <div className="auth__form">
          <label className="auth__element">
            <p className="auth__text">E-mail</p>
            <input
              className="auth__input" name="email" id="input-email"
              placeholder="Введите E-mail" type="email" minLength="8"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              onChange={handleChange}
              value={values.email || ""}
              required
            />
            <span className=" auth__err input-email-error" type="text">{errors.email}</span>
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
        </div>
        <div className="auth__container auth__container_type_login">
          <button type="submit"
            className={`auth__button ${isValid ? "" : "auth__button_disabled"}`}
            disabled={!isValid}
          >Войти</button>
          <p className="auth__question">
            Еще не зарегистрированы?&nbsp;&nbsp;
            <Link to="/signup" className="auth__register-link">Регистрация</Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default Login;