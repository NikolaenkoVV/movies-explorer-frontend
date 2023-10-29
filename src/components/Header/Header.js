import "./Header.css";
import Logo from "../Logo/Logo";
import NavMovies from "../NavMovies/NavMovies";
import NavAuth from "../NavAuth/NavAuth";
import ProfileLink from "../ProfileLink/ProfileLink";
import { useLocation } from "react-router-dom";
import MenuButton from "../MenuButton/MenuButton";
import SideBar from "../SideBar/SideBar";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header() {
  const location = useLocation();
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const handleSideBarOpenToggle = () => setisSideBarOpen(!isSideBarOpen);
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header
      className={`header ${
        location.pathname !== "/" ? "header_type_light" : " "
      }`}
    >
      <Logo />
      {currentUser ? (
        <>
          <NavMovies isOpen={isSideBarOpen} onSideBar={false} />{" "}
          <ProfileLink onSideBar={false} />{" "}
          <MenuButton handleOpen={handleSideBarOpenToggle} />{" "}
          <SideBar
            isOpen={isSideBarOpen}
            handleClose={handleSideBarOpenToggle}
          />
        </>
      ) : (
        <>
          <NavAuth />
        </>
      )}
    </header>
  );
}

export default Header;
