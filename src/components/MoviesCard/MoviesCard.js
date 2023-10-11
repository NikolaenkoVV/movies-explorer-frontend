import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function MoviesCard({ movie }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSavingToggle = () => {
    setIsSaved(!isSaved);
  };

  const handleVisibleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <li
      className="movie"
      onMouseEnter={handleVisibleToggle}
      onMouseLeave={handleVisibleToggle}
    >
      <img src={movie.poster} className="movie__poster" alt={movie.title} />
      <div className="movie__info">
        <div className="movie__title-box">
          <h3 className="movie__title">{movie.title}</h3>
          <button
            className={`movie__button ${
              location.pathname === "/movies"
                ? `${isSaved ? "movie__button_type_saved" : ""}`
                : `${
                    isVisible
                      ? "movie__button_type_delete"
                      : "movie__button_type_inactive"
                  }`
            }`}
            type="button"
            onClick={handleSavingToggle}
          ></button>
        </div>
        <p className="movie__duration">{movie.duration}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
