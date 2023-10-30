import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import "../Form/Form.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useState } from "react";
import useFormValidation from "../../hooks/useFormValidation";
import mainApi from "../../utils/MainApi";
import { SEARCH_LOCAL_STORAGE_KEY } from "../../utils/constants";

function Profile({ setIsOpenPopup, setPopupMessage }) {
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [serverErrorMessage, setServerErrorMessage] = useState("");
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } =
    useFormValidation(currentUser);
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const handleUpdateUser = (data) => {
    console.log(values);
    setIsLoading(true);
    mainApi
      .updateServerUserInfo(data, jwt)
      .then((res) => {
        console.log(111, res);
        setCurrentUser({ name: data.name, email: data.email });
        setIsInputDisabled(true);
        setPopupMessage("Данные пользователя обновлены успешно!");
        setIsOpenPopup(true);
        console.log(currentUser);
      })
      .catch((err) => {
        console.log(err);
        setServerErrorMessage(`${err}`);
      })
      .finally(() => setIsLoading(false));
  };

  const handleEditProfile = () => {
    setIsInputDisabled(!isInputDisabled);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateUser(values);
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem(SEARCH_LOCAL_STORAGE_KEY);
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <section className="profile">
      <div className="profile__content">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="form form_type_profile" onSubmit={handleSubmit}>
          <div className="form__input-wrapper form__input-wrapper_type_profile">
            <label className="form__input-label form__input-label_type_profile">
              Имя
            </label>
            <input
              className="form__input form__input_type_profile"
              type="text"
              name="name"
              value={values.name}
              disabled={isInputDisabled}
              onChange={handleChange}
            />
            <span
              className={`form__input-error form__input-error_type_profile ${
                errors.name ? "form__input-error_type_visible" : ""
              }`}
            >
              {errors.name}
            </span>
          </div>
          <div className="form__input-wrapper form__input-wrapper_type_profile">
            <label className="form__input-label form__input-label_type_profile">
              E-mail
            </label>
            <input
              className="form__input form__input_type_profile"
              type="email"
              name="email"
              value={values.email}
              disabled={isInputDisabled}
              onChange={handleChange}
            />
            <span
              className={`form__input-error form__input-error_type_profile ${
                errors.email ? "form__input-error_type_visible" : ""
              }`}
            >
              {errors.email}
            </span>
          </div>
          {isInputDisabled && (
            <button
              className="form__edit-button"
              type="button"
              onClick={handleEditProfile}
            >
              Редактировать
            </button>
          )}

          {!isInputDisabled && (
            <div className="form__submit-wrapper">
              <span
                className={`form__submit-error ${
                  serverErrorMessage ? "form__submit-error_type_visible" : ""
                }`}
              >
                {serverErrorMessage}
              </span>
              <button
                className="form__submit-button"
                disabled={
                  (!isValid ? true : false) ||
                  (values.name === currentUser.name &&
                    values.email === currentUser.email)
                }
              >
                {isLoading ? "Проверка данных" : "Сохранить"}
              </button>
            </div>
          )}
        </form>
        {isInputDisabled && (
          <Link to="/" className="profile__link" onClick={handleSignOut}>
            Выйти из аккаута
          </Link>
        )}
      </div>
    </section>
  );
}

export default Profile;
