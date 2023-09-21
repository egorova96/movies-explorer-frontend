import "./Promo.css";

import promoImg from "../../images/promoImg.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <img className="promo__image" src={promoImg} alt="Картинка" />
      </div>
    </section>
  );
};

export default Promo;