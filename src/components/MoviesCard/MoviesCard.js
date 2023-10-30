import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import mainApi from "../../utils/MainApi";

function MoviesCard({ movie, isSaved, updateSavedMovies }) {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const onClickHandle = () => {
    if (isSaved) {
      handleDeleteMovie();
    } else {
      handleSaveMovie();
    }
  };

  const handleVisibleToggle = () => {
    setIsVisible(!isVisible);
  };

  const getDuration = (value) => {
    const duration = `${Math.floor(value / 60)}ч ${value % 60}м`;
    return duration;
  };

  const handleSaveMovie = () => {
    mainApi
      .saveMovie(movie)
      .then(() => {
        updateSavedMovies();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = () => {
    mainApi
      .deleteMovie(movie.movieId)
      .then(() => {
        updateSavedMovies();
      })
      .catch((err) => console.log(err));
  };

  return (
    <li
      className="movie"
      onMouseEnter={handleVisibleToggle}
      onMouseLeave={handleVisibleToggle}
    >
      <a
        href={movie.trailerLink}
        className="movie__link"
        target="_blank"
        rel="noreferrer"
      >
        <img src={movie.image} className="movie__poster" alt={movie.nameRU} />
      </a>
      <div className="movie__info">
        <div className="movie__title-box">
          <h3 className="movie__title">{movie.nameRU}</h3>
          <button
            className={`movie__button ${
              isSaved ? "movie__button_type_delete" : ""
            }  ${
              location.pathname === "/movies"
                ? `${
                    isSaved
                      ? "movie__button_type_saved"
                      : "movie__button_type_inactive"
                  }`
                : ``
            }`}
            type="button"
            onClick={onClickHandle}
          ></button>
        </div>
        <p className="movie__duration">{getDuration(movie.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
