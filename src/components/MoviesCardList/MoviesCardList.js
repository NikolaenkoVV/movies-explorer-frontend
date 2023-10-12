import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <>
      <ul className="movies-list">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>
      <button className="movies-button" type="button">
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;
