import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <button className="page-not-found__button" onClick={goBack} type="button">Назад</button>
    </section>
  );
};

export default PageNotFound;