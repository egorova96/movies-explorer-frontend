import { Link } from "react-router-dom";
import "./Form.css";
import headerLogo from "../../images/logoHeader.svg";

function Form(props) {

  return (
    <>
      <Link to="/" className="auth__logo-link">
        <img className="auth__logo" src={headerLogo} alt="лого" />
      </Link>
      <form className="auth__form" onSubmit={props.onSubmit}>
        <h1 className="auth__title">{props.title}</h1>
        <div className="auth__inputs">
          {props.children}
        </div>
      </form></>
  );
};

export default Form;