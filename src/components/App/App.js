import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Popup from "../Popup/Popup";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Layout from "../Layout/Layout";
import LayoutProfile from "../LayoutProfile/LayoutProfile";
import Preloader from "../Preloader/Preloader";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (!jwt) {
      setIsLoaded(true);
      return;
    }
    auth
      .getToken(jwt)
      .then((res) => {
        if (res) {
          setCurrentUser({ name: res.name, email: res.email });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoaded(true));
  }, []);

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  if (!isLoaded)
    return (
      <>
        <Preloader />
      </>
    );

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
      }}
    >
      <div className="content">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute element={Movies} currentUser={currentUser} />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  currentUser={currentUser}
                />
              }
            />
          </Route>
          <Route
            path="/signup"
            element={
              <Register
                setPopupMessage={setPopupMessage}
                setIsOpenPopup={setIsOpenPopup}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                setPopupMessage={setPopupMessage}
                setIsOpenPopup={setIsOpenPopup}
              />
            }
          />
          <Route element={<LayoutProfile />}>
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  currentUser={currentUser}
                  setPopupMessage={setPopupMessage}
                  setIsOpenPopup={setIsOpenPopup}
                />
              }
            />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Popup
          popupMessage={popupMessage}
          isOpen={isOpenPopup}
          onClose={closePopup}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
