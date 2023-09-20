import { Link } from "react-router-dom";
import "../Form/Form.css";
import Form from "../Form/Form";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

function Login() {
  const {isValid} = useFormAndValidation();
  return (
    <section className="auth">
      <Form title="Рады видеть!" />
      <div className="auth__container auth__container_type_login">
        <span className="auth__err auth__err_type_server" type="text"></span>
        <button className="auth__button" disabled={isValid?false:true} type="submit">Войти</button>
          <p className="auth__question">
            Еще не зарегистрированы?&nbsp;&nbsp;
            <Link to="/signup" className="auth__register-link">
              Регистрация
            </Link>
          </p>
      </div>
    </section>
  );
};

export default Login;