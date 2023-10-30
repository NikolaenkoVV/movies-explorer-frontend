import { omit } from "lodash";
import { useState, useMemo } from "react";

function useFormValidation(initialValues = {}) {
  const [values, setValues] = useState({ ...initialValues });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // const isValid = useMemo(
  //   () => Object.keys(errors).length === 0 && Object.keys(values).length !== 0,
  //   [errors, values]
  // );

  const validate = (name, value) => {
    switch (name) {
      case "name":
        if (value.length === 0) {
          setErrors({ ...errors, [name]: "Это обязательное поле" });
        } else if (value.length < 2) {
          setErrors({
            ...errors,
            [name]: "Минимальное количество символов - 2",
          });
        } else if (!new RegExp(/^[а-яёА-ЯЁa-zA-Z\s/-]+$/).test(value)) {
          setErrors({
            ...errors,
            [name]:
              "Поле должно содержать только латиницу, кириллицу, пробел или дефис",
          });
        } else {
          const newObj = omit(errors, "name");
          setErrors(newObj);
        }
        break;
      case "email":
        if (value.length === 0) {
          setErrors({ ...errors, [name]: "Это обязательное поле" });
        } else if (
          !new RegExp(/[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}/).test(value)
        ) {
          setErrors({
            ...errors,
            [name]: "Неправильный адрес электронной почты",
          });
        } else {
          const newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "password":
        if (value.length === 0) {
          setErrors({ ...errors, [name]: "Это обязательное поле" });
        } else if (value.length < 8) {
          setErrors({
            ...errors,
            [name]: "Минимальное количество символов - 8",
          });
        } else {
          const newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    validate(name, value);
    setValues({ ...values, [name]: value });
    setIsValid(event.target.closest("form").checkValidity());
  };

  // console.log(errors);
  return { values, errors, isValid, handleChange };
}

export default useFormValidation;
