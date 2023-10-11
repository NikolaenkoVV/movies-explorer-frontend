import React from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
  return (
    <div className="content">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header isLoggedIn={true} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header isLoggedIn={true} />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header isLoggedIn={true} />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header isLoggedIn={true} />
              <Profile />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/signin"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <PageNotFound />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
