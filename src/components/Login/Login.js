import "./Login.css";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import { useContext, useState } from "react";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Login({ setPopupMessage, setIsOpenPopup }) {
  const { values, errors, isValid, handleChange } = useFormValidation();
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    setIsLoading(true);
    auth
      .authorize(email, password)
      .then((res) => {
        console.log(res);
        localStorage.setItem("jwt", res.token);
        setPopupMessage("Авторизация прошла успешно!");
        setIsOpenPopup(true);
        setCurrentUser(res.user);
        console.log(currentUser);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        setServerErrorMessage(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(values);
  };

  return (
    <section className="login">
      <div className="login__content">
        <Logo />
        <h2 className="login__title">Рады видеть!</h2>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form__input-wrapper">
            <label className="form__input-label">E-mail</label>
            <input
              className="form__input"
              type="email"
              name="email"
              // value={values.email || ""}
              onChange={handleChange}
              required
            ></input>
            <span
              className={`form__input-error ${
                errors.email ? "form__input-error_type_visible" : ""
              }`}
            >
              {errors.email}
            </span>
          </div>
          <div className="form__input-wrapper">
            <label className="form__input-label">Пароль</label>
            <input
              className="form__input"
              type="password"
              name="password"
              minLength="8"
              // value={values.password || ""}
              onChange={handleChange}
              required
            ></input>
            <span
              className={`form__input-error ${
                errors.password ? "form__input-error_type_visible" : ""
              }`}
            >
              {errors.password}
            </span>
          </div>
          <span
            className={`form__submit-error ${
              serverErrorMessage ? "form__submit-error_type_visible" : ""
            }`}
          >
            {serverErrorMessage}
          </span>
          <button
            type="submit"
            className={`form__submit-button ${
              !isValid ? "form__submit-button_type_disabled" : ""
            }`}
            disabled={!isValid ? true : false}
          >
            {isLoading ? "Проверка данных..." : "Войти"}
          </button>
        </form>
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
