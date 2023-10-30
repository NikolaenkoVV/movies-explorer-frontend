import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function LayoutProfile() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default LayoutProfile;
