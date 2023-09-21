import "./Portfolio.css";
import toProjectImg from "../../images/portfolioimg.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
            <a className="portfolio__link" 
            href="https://github.com/egorova96/how-to-learn" rel="noreferrer">
              Статичный сайт
              <img className="portfolio__image" src={toProjectImg} alt="Ссылка на проект" />
            </a>
        </li>
        <li className="portfolio__list-item">
            <a className="portfolio__link" 
            href="https://github.com/egorova96/russian-travel" rel="noreferrer">
              Адаптивный сайт
              <img className="portfolio__image" src={toProjectImg} alt="Ссылка на проект" />
            </a>
        </li>
        <li className="portfolio__list-item">
            <a className="portfolio__link" 
            href="https://github.com/egorova96/react-mesto-api-full-gha" rel="noreferrer">
              Одностраничное приложение
              <img className="portfolio__image" src={toProjectImg} alt="Ссылка на проект" />
            </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;