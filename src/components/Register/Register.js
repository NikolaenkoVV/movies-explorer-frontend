import "./Register.css";
import "../Form/Form.css";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";
import { useContext, useState } from "react";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Register({ setPopupMessage, setIsOpenPopup }) {
  const { values, errors, isValid, handleChange } = useFormValidation();
  const [isLoading, setIsLoading] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } =
    useContext(CurrentUserContext);

  const handleRegister = (data) => {
    setIsLoading(true);
    auth
      .register(data)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          setCurrentUser(res.user);
          setIsOpenPopup(true);
          setPopupMessage("Регистрация прошла успешно!")
          navigate("/movies");
        }
      })
      .catch((err) => setServerErrorMessage(err))
      .finally(() => setIsLoading(false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister(values);
  };

  return (
    <section className="register">
      <div className="register__content">
        <Logo />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="form__input-wrapper">
            <label className="form__input-label">Имя</label>
            <input
              className="form__input"
              type="text"
              name="name"
              value={values.name || ""}
              minLength="2"
              maxLength="30"
              onChange={handleChange}
              required
            />
            <span
              className={`form__input-error ${
                errors.name ? "form__input-error_type_visible" : ""
              }`}
            >
              {errors.name}
            </span>
          </div>
          <div className="form__input-wrapper">
            <label className="form__input-label">E-mail</label>
            <input
              className="form__input"
              type="email"
              name="email"
              value={values.email || ""}
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
              value={values.password || ""}
              onChange={handleChange}
              required
              autoComplete="off"
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
            className="form__submit-button"
            disabled={isValid ? false : true}
          >
            {isLoading ? "Проверка данных..." : "Зарегистрироваться"}
          </button>
        </form>
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
