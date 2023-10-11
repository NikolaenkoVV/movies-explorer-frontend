import "./MenuButton.css";
import { useLocation } from "react-router-dom";

function MenuButton({ handleOpen }) {
  const location = useLocation();
  return (
    <button
      className={`menu-button ${
        location.pathname === "/" ? "menu-button_type_light" : ""
      }`}
      onClick={handleOpen}
    ></button>
  );
}

export default MenuButton;
