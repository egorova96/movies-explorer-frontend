import "./Navigation.css";

import burgerMenu from "../../images/menu.svg";
import iconProfile from "../../images/profileimg.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navigation() {
  const { pathname } = useLocation();
  const [statusBurgerMenu, setStatusBurgerMenu] = useState(false);
  const [isBurger, setIsBurger] = useState(false);

  function handleBurgerMenuClick() {
    setIsBurger(!isBurger);
    setStatusBurgerMenu(!statusBurgerMenu);
  };

  useEffect(() => {
    setIsBurger(false);
  }, [pathname]);

  return (
    <div className="navigation">
      <nav className="navigation__content">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <Link
              to="/movies"
              className={`navigation__link ${
                pathname !== "/movies" ? "" : "navigation__link_type_weight"
              }`}
            >
              Фильмы
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link
              to="/saved-movies"
              className={`navigation__link ${
                pathname !== "/saved-movies" ? "" : "navigation__link_type_weight"
              }`}
            >
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
        <div className="navigation__container">
          <Link
            to="/profile"
            className={`navigation__link ${
              pathname !== "/profile" ? "" : "navigation__link_type_weight"
            }`}
          >
            Аккаунт
            <div className="navigation__image">
              <img
                className="navigation__image-item"
                src={iconProfile}
                alt="профиль"
              />
            </div>
          </Link>
        </div>
      </nav>
      <img
        className="navigation__burger-menu-open"
        src={burgerMenu}
        alt="Меню"
        onClick={handleBurgerMenuClick}
      />

      {isBurger && (
        <>
          <div className="burger__overlay"></div>
          <div className="burger-menu">
            <button
              className="burger-menu__close-button"
              type="button"
              onClick={handleBurgerMenuClick}
            ></button>
            <nav className="burger-menu__container">
              <ul className="burger-menu__list">
                <li className="burger-menu__list-item">
                  <Link
                    to="/"
                    className={`burger-menu__link ${
                      pathname !== "/" ? "" : "burger-menu__link-active"
                    }`}
                  >
                    Главная
                  </Link>
                </li>
                <li className="burger-menu__list-item">
                  <Link
                    to="/movies"
                    className={`burger-menu__link ${
                      pathname !== "/movies" ? "" : "burger-menu__link-active"
                    }`}
                  >
                    Фильмы
                  </Link>
                </li>
                <li className="burger-menu__list-item">
                  <Link
                    to="/saved-movies"
                    className={`burger-menu__link ${
                      pathname !== "/saved-movies"
                        ? ""
                        : "burger-menu__link-active"
                    }`}
                  >
                    Сохраненные фильмы
                  </Link>
                </li>
              </ul>
              <div className="burger-menu__profile-button">
                <Link
                  to="/profile"
                  className={`burger-menu__link burger-menu__link_type_button-profile ${
                    pathname !== "/profile" ? "" : "burger-menu__link-active"
                  }`}
                >
                  Аккаунт
                  <div className="burger-menu__image">
                    <img
                      className="burger-menu__image-item"
                      src={iconProfile}
                      alt="профиль"
                    />
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Navigation;