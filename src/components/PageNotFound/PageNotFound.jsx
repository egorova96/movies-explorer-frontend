import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="notfound-page">
      <h2 className="notfound-page__title">404</h2>
      <p className="notfound-page__text">Страница не найдена</p>
      <button className="page-not-found__button" onClick={goBack} type="button">Назад</button>
    </section>
  );
};

export default PageNotFound;