import "./AboutMe.css";
import avatar from "../../images/avatar.jpg";

function AboutMe() {
  return (
    <section className="about">
      <h2 className="about__title">Студент</h2>
      <div className="about__container">
        <div className="about__information">
          <h3 className="about__name">Виталий</h3>
          <p className="about__work">Фронтенд-разработчик, 30 лет</p>
          <p className="about__my-life">
          Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть жена 
            и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;еще увлекаюсь бегом. Недавно начал кодить. С
            2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошел курс по&nbsp;веб-
            разработке, начал заниматься фриланс-заказами и&nbsp;ушел с&nbsp;постоянной работы.
          </p>
          <a className="about__github-link" href="https://github.com/egorova96" rel="noreferrer" target="_blank">Github</a>
        </div>
        <img className="about__avatar" src={avatar} alt="аватар" />
      </div>
    </section>
  );
};

export default AboutMe;