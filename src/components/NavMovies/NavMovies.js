import "./NavMovies.css";
import { NavLink, useLocation } from "react-router-dom";

function NavMovies({ onClose, onSideBar }) {
  const location = useLocation();
  return (
    <nav
      className={`nav-movies ${
        onSideBar ? "nav-movies_type_visible" : "nav-movies_type_hidden"
      }`}
    >
      <ul
        className={`nav-movies__list ${
          onSideBar ? "nav-movies__list_type_sidebar" : ""
        }`}
      >
        <li className="nav-movies__item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-movies__link ${
                location.pathname === "/" ? "nav-movies__link_type_light" : ""
              } ${isActive ? "nav-movies__link_type_active" : ""} ${
                onSideBar
                  ? "nav-movies__link_type_sidebar nav-movies__link_type_dark"
                  : "nav-movies__link_type_hidden"
              }`
            }
            onClick={onClose}
          >
            Главная
          </NavLink>
        </li>
        <li className="nav-movies__item">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `nav-movies__link ${
                location.pathname === "/" ? "nav-movies__link_type_light" : ""
              } ${isActive ? "nav-movies__link_type_active" : ""} ${
                onSideBar
                  ? "nav-movies__link_type_sidebar nav-movies__link_type_dark"
                  : ""
              }`
            }
            onClick={onClose}
          >
            Фильмы
          </NavLink>
        </li>
        <li className="nav-movies__item">
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `nav-movies__link ${
                location.pathname === "/" ? "nav-movies__link_type_light" : ""
              } ${isActive ? "nav-movies__link_type_active" : ""} ${
                onSideBar
                  ? "nav-movies__link_type_sidebar nav-movies__link_type_dark"
                  : ""
              }`
            }
            onClick={onClose}
          >
            Сохраненные фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMovies;
