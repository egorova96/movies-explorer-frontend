import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <form className="profile__form">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__form-input-container">
          <div className="profile__input profile__input_type_name">
            <p className="profile__text">Имя</p>
            <input 
              placeholder="Введите имя"
              id="input-name"
              className="profile__line"
              name="name"
              minLength="2"
              maxLength="30"
              required
              type="name"
              value="Виталий"
              disabled />
          </div>
          <div className="profile__input profile__input_type_email">
            <p className="profile__text">E-mail</p>
            <input
              placeholder="Введите E-mail"
              id="input-email"
              className="profile__line"
              name="email"
              type="email"
              minLength="8"
              required
              value="pochta@yandex.ru"
              disabled />
          </div>
        </div>
        <div className="profile__buttons-container">
          <span className="profile__error" type="text"></span>
          <button className="profile__save-button" type="submit" >Сохранить</button>
          <button className="profile__edit-button" type="button">Редактировать</button>
          <button className="profile__signout-button" type="button">Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
};

export default Profile;