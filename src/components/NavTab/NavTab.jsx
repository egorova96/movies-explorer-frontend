import { Link } from "react-router-dom";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__text-list">
        <li className="navtab__text-list-item">
          <Link to="/signup" className="navtab__text-list-link">Регистрация</Link>
        </li>
        <li className="navtab__text-list-item">
          <Link to="/signin" className="navtab__text-list-link navtab__text-list-link_green">Войти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;