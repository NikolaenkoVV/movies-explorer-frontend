import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
  return (
    <section className="profile">
      <div className="profile__content">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <div className="profile__input-wrapper">
            <label className="profile__caption">Имя</label>
            <input
              className="profile__input"
              type="text"
              defaultValue="Виталий"
            />
          </div>
          <div className="profile__input-wrapper">
            <label className="profile__caption">E-mail</label>
            <input
              className="profile__input"
              type="email"
              defaultValue="pochta@yandex.ru"
            />
          </div>
          <button className="profile__button" type="button">
            Редактировать
          </button>
        </form>
        <Link to="/" className="profile__link">
          Выйти из аккаута
        </Link>
      </div>
    </section>
  );
}

export default Profile;
