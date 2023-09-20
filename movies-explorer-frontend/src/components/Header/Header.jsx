import "./Header.css";
import headerLogo from "../../images/logoHeader.svg";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab";


function Header() {
  const { pathname } = useLocation();

  return (
    <header className={`header ${pathname !== "/" ? "" : "header_type_login"}`}>
      <Link to="/" className="header__link">
        <img className="header__logo" 
        src={headerLogo} 
        alt="лого" />
      </Link>
      {pathname !== "/" ? <Navigation /> : <NavTab />}
    </header>
  );
};

export default Header;