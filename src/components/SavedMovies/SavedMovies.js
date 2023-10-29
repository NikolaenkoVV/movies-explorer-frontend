import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useMemo, useState } from "react";
import mainApi from "../../utils/MainApi";
import { SHORT_DURATION } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function SavedMovies() {
  const [loading, setLoading] = useState(true);
  const [savedMovies, setSavedMovies] = useState([]);

  const [search, setSearch] = useState({ name: "", isShort: false });

  const loadSavedMovies = () => {
    return mainApi
      .getMovies()
      .then((res) => {
        if (res) {
          console.log(41231, res);
          setSavedMovies(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadSavedMovies().finally(() => setLoading(false));
  }, []);

  const filteredMovies = useMemo(() => {
    const filtered = savedMovies.filter((movie) => {
      const { nameEN, nameRU, duration } = movie;
      const searchStr = search.name.toLowerCase();
      if (
        searchStr &&
        !nameRU.toLowerCase().includes(searchStr) &&
        !nameEN.toLowerCase().includes(searchStr)
      ) {
        return false;
      }

      if (search.isShort && duration > SHORT_DURATION) return false;
      return true;
    });

    return filtered;
  }, [search, savedMovies]);

  if (loading) return <Preloader />

  return (
    <section className="saved-movies">
      <SearchForm
        // error={error}
        initialSearch={search}
        updateSearch={(name, isShort) => setSearch({ name, isShort })}
      />
      <MoviesCardList
        movies={filteredMovies}
        savedMovies={savedMovies}
        updateSavedMovies={loadSavedMovies}
      />
    </section>
  );
}

export default SavedMovies;
