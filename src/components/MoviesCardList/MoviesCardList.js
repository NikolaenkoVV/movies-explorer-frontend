import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <>
      <ul className="movies__list">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>
      <button className="movies__button" type="button">
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;
