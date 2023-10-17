import "./SideBar.css";
import NavMovies from "../NavMovies/NavMovies";
import ProfileLink from "../ProfileLink/ProfileLink";

function SideBar({ isOpen, handleClose }) {
  return (
    <div className={`overlay ${isOpen ? "overlay_type_active" : ""}`}>
      <div className={`sidebar ${isOpen ? "sidebar_type_active" : ""}`}>
        <button className="sidebar__button" onClick={handleClose}></button>
        <NavMovies onClose={handleClose} onSideBar={true} />
        <ProfileLink onClose={handleClose} onSideBar={true} />
      </div>
    </div>
  );
}

export default SideBar;
