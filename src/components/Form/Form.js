import "./Form.css";

function Form({ title, submitButtonText, children}) {
  return (
    <form className="form">
      <h2 className="form__title">{title}</h2>
      {children}
      <button type="submit" className="form__submit-button">
        {submitButtonText}
      </button>
    </form>
  );
}

export default Form;
