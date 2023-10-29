import "./Popup.css";
import iconSuccess from "../../images/icon-success.svg";

function Popup({ popupMessage, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_type_opened" : ""}`} onClick={onClose}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={onClose}
        ></button>
        <img className="popup__icon" src={iconSuccess} alt="Кружок с галочкой внутри зеленого цвета" />
        <h3 className="popup__title">{popupMessage}</h3>
      </div>
    </div>
  );
}

export default Popup;
