import { Link } from "react-router-dom";
import "./Form.css";
import headerLogo from "../../images/logoHeader.svg";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Form(props) {
  const {values, errors, handleChange} = useFormAndValidation();

  return (
    <>
      <Link to="/" className="auth__logo-link">
        <img className="auth__logo" src={headerLogo} alt="лого" />
      </Link>
      <form className="auth__form">
        <h2 className="auth__title">{props.title}</h2>
        <div className="auth__inputs">
          {props.children}
          <label className="auth__element">
            <p className="auth__text">E-mail</p>
            <input
              id="input-email"
              className="auth__input"
              placeholder="Введите E-mail"
              value={values.email || ""}
              type="email"
              name="email"
              minLength="8"
              onChange={handleChange}
              required
            />
            <span className="input-email-err auth__err" type="text">{errors.email}</span>
          </label>
          <label className="auth__element">
            <p className="auth__text">Пароль</p>
            <input
              className={`auth__input ${errors.password ? 'auth__input_type_red' : ''}`}
              placeholder="Введите Пароль"
              id="input-password"
              type="password"
              name="password"
              value={values.password || ""}
              minLength="8"
              maxLength="20"
              onChange={handleChange}
              required
            />
            <span className="input-password-err auth__err" type="text">{errors.password}</span>
          </label>
        </div>
      </form></>
  );
};

export default Form;