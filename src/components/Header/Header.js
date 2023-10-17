import "./Header.css";
import Logo from "../Logo/Logo";
import NavMovies from "../NavMovies/NavMovies";
import NavAuth from "../NavAuth/NavAuth";
import ProfileLink from "../ProfileLink/ProfileLink";
import { useLocation } from "react-router-dom";
import MenuButton from "../MenuButton/MenuButton";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";

function Header({ isLoggedIn }) {
  const location = useLocation();
  const [isSideBarOpen, setisSideBarOpen] = useState(false);

  const handleSideBarOpenToggle = () => setisSideBarOpen(!isSideBarOpen);
  return (
    <header
      className={`header ${
        location.pathname !== "/" ? "header_type_light" : " "
      }`}
    >
      <Logo />
      {isLoggedIn && <NavMovies isOpen={isSideBarOpen} onSideBar={false} />}
      {isLoggedIn && <ProfileLink onSideBar={false} />}
      {!isLoggedIn && <NavAuth />}
      {isLoggedIn && <MenuButton handleOpen={handleSideBarOpenToggle} />}
      <SideBar isOpen={isSideBarOpen} handleClose={handleSideBarOpenToggle}/>
    </header>
  );
}

export default Header;
