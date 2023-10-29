import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";

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

    if (width < 630) {
      setShowedMovies(5);
      setAddingMovies(2);
    } else if (width < 990) {
      setShowedMovies(8);
      setAddingMovies(2);
    } else if (width < 1280) {
      setShowedMovies(12);
      setAddingMovies(3);
    } else {
      setShowedMovies(16);
      setAddingMovies(4);
    }
  };

  const addingMoreMovies = () => {
    setShowedMovies(showedMovies => showedMovies + addingMovies);
  };

  useEffect(() => {
    setShowedMoviesCount();
    window.addEventListener("resize", () =>
      setTimeout(() => {
        setShowedMoviesCount();
      }, 1000)
    );
  }, []);

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
