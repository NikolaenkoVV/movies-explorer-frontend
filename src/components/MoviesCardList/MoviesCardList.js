import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import {
  MAX_MOBILE_SCREEN_DISPLAY,
  TABLET_SCREEN_DISPLAY,
  DESKTOP_SCREEN_DISPLAY,
  MIN_ADDING_STEP,
  MIDDLE_ADDING_STEP,
  MAX_ADDING_STEP,
  MOBILE_SCREEN_INITIAL_MOVIES_COUNT,
  TABLET_SCREEN_INITIAL_MOVIES_COUNT,
  DESKTOP_SCREEN_INITIAL_MOVIES_COUNT,
  XL_DISPLAY_SCREEN_INITIAL_MOVIES_COUNT,
} from "../../utils/constants";

function MoviesCardList({
  movies,
  savedMovies,
  updateSavedMovies,
  addMoreButton,
}) {
  const [showedMovies, setShowedMovies] = useState(0);
  const [addingMovies, setAddingMovies] = useState(0);

  const setShowedMoviesCount = () => {
    let width = window.innerWidth;

    if (!addMoreButton) {
      setShowedMovies(movies.length);
      return;
    }

    if (width < MAX_MOBILE_SCREEN_DISPLAY) {
      setShowedMovies(MOBILE_SCREEN_INITIAL_MOVIES_COUNT);
      setAddingMovies(MIN_ADDING_STEP);
    } else if (width < TABLET_SCREEN_DISPLAY) {
      setShowedMovies(TABLET_SCREEN_INITIAL_MOVIES_COUNT);
      setAddingMovies(MIN_ADDING_STEP);
    } else if (width < DESKTOP_SCREEN_DISPLAY) {
      setShowedMovies(DESKTOP_SCREEN_INITIAL_MOVIES_COUNT);
      setAddingMovies(MIDDLE_ADDING_STEP);
    } else {
      setShowedMovies(XL_DISPLAY_SCREEN_INITIAL_MOVIES_COUNT);
      setAddingMovies(MAX_ADDING_STEP);
    }
  };

  const addingMoreMovies = () => {
    setShowedMovies((showedMovies) => showedMovies + addingMovies);
  };

  useEffect(() => {
    setShowedMoviesCount();
    window.addEventListener("resize", () =>
      setTimeout(() => {
        setShowedMoviesCount();
      }, 1000)
    );
  }, [movies]);

  if (!movies.length) return "Ничего не найдено";

  return (
    <>
      <ul className="movies-list">
        {movies.slice(0, showedMovies).map((movie) => {
          return (
            <MoviesCard
              key={movie.movieId}
              movie={movie}
              isSaved={savedMovies
                .map(({ movieId }) => movieId)
                .includes(movie.movieId)}
              updateSavedMovies={updateSavedMovies}
            />
          );
        })}
      </ul>
      {addMoreButton && movies.length > showedMovies && (
        <button
          className="movies-button"
          type="button"
          onClick={addingMoreMovies}
        >
          Ещё
        </button>
      )}
    </>
  );
}

export default MoviesCardList;
