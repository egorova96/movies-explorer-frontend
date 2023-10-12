import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__container">
        <p className="footer__copyright">&#169;&#160;2020</p>
        <nav className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__list-element">
                <a className="footer__link" href="https://practicum.yandex.ru/"  rel="noreferrer" target="_blank">Яндекс.Практикум</a>
            </li>
            <li className="footer__list-elem">
              <a className="footer__link" href="https://github.com/egorova96/" rel="noreferrer" target="_blank">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;