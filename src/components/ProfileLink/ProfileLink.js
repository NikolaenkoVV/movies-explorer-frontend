import "./ProfileLink.css";
import { Link } from "react-router-dom";
import profileLogo from "../../images/profile-link-icon.svg";
import { useLocation } from "react-router-dom";

function ProfileLink({ onSideBar, onClose }) {
  const location = useLocation();
  return (
    <Link
      to="/profile"
      className={`profile-link ${
        location.pathname !== "/" ? "profile-link_type_light" : ""
      } ${
        onSideBar
          ? "profile-link_type_light profile-link_type_sidebar profile-link_type_visible"
          : "profile-link_type_hidden"
      }`} onClick={onClose}
    >
      <p className="profile-link__text">Аккаунт</p>
      <img
        src={profileLogo}
        alt="Иконка профиля"
        className="profile-link__icon"
      />
    </Link>
  );
}

export default ProfileLink;
