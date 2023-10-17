import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import testMovies from "../../utils/testMovies";

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={testMovies} />
    </section>
  );
}

export default Movies;
