import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import testSavedMovies from "../../utils/testSavedMovies";

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={testSavedMovies} />
    </section>
  );
}

export default SavedMovies;
