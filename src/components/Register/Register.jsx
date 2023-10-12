import "../Form/Form.css";
import Form from "../Form/Form";

import { Link } from "react-router-dom";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Register() {
  const {values, errors, isValid, handleChange} = useFormAndValidation();

  return (
    <section className="auth">
      <Form title="Добро пожаловать!">
        <label className="auth__element">
          <p className="auth__text">Имя</p>
          <input
            className="auth__input"
            type="name"
            value={values.name || ""}
            id="input-name"
            name="name"
            placeholder="Введите имя"
            required
            onChange={handleChange}
            minLength="2"
            maxLength="40"
          />
          <span className="input-name-error auth__err" type="text">{errors.name}</span>
        </label>
      </Form>
      <div className="auth__container">
        <span className="auth__error auth__error_type_server" type="text"></span>
        <button className="auth__button" disabled={isValid?false:true} type="submit">Зарегистрироваться</button>
          <p className="auth__question">
            Уже зарегистрированы?&nbsp;&nbsp;
            <Link to="/signin" className="auth__register-link">
              Войти
            </Link>
          </p>
      </div>
    </section>
  );
};

export default Register;