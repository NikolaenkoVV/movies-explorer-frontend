import "./Register.css";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register">
      <div className="register__content">
        <Logo />
        <Form title="Добро пожаловать!" submitButtonText="Зарегистрироваться">
          <div className="form__input-wrapper">
            <label className="form__input-label">Имя</label>
            <input
              className="form__input"
              type="text"
              name="name"
              minLength="2"
              maxLength="40"
              defaultValue="Виталий"
            ></input>
            <span className="form__input-error"></span>
          </div>
          <div className="form__input-wrapper">
            <label className="form__input-label">E-mail</label>
            <input
              className="form__input"
              type="email"
              name="email"
              defaultValue="pochta@yandex.ru"
            ></input>
            <span className="form__input-error"></span>
          </div>
          <div className="form__input-wrapper">
            <label className="form__input-label">Пароль</label>
            <input
              className="form__input"
              type="password"
              name="password"
              minLength="8"
              maxLength="40"
              defaultValue="••••••••••••••"
            ></input>
            <span className="form__input-error form__input-error_type_visible">
              Что-то пошло не так...
            </span>
          </div>
        </Form>
        <p className="register__quote">
          Уже зарегистрировны?&nbsp;
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
