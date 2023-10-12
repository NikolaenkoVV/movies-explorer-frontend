import "./Login.css";
import Logo from "../Logo/Logo";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <div className="login__content">
        <Logo />
        <Form title="Рады видеть!" submitButtonText="Войти">
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
        <p className="login__quote">
          Еще не зарегистрировны?&nbsp;
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
