import "./Logo.css";
import { Link } from "react-router-dom";
import logo from "../../images/app-logo.svg";

function Logo() {
  return (
    <Link to="/" className="logo-link">
      <img
        src={logo}
        alt="Логотип приложения: кружок зеленого цвета"
        className="logo"
      />
    </Link>
  );
}

export default Logo;
