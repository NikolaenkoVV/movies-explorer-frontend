import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useEffect, useMemo, useState } from "react";
import moviesApi from "../../utils/MoviesApi";
import {
  EMPTY_QUERY_ERROR,
  SEARCH_LOCAL_STORAGE_KEY,
  SHORT_DURATION,
} from "../../utils/constants";
import mainApi from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

function Movies() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [search, setSearch] = useState(null);
  const [error, setError] = useState("");

  const loadMovies = () => {
    return moviesApi
      .getServerMovies()
      .then((res) => {
        if (res) {
          console.log(res);
          setMovies(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
    Promise.all([loadMovies(), loadSavedMovies()]).finally(setLoading(false));

    try {
      const searchData = JSON.parse(
        localStorage.getItem(SEARCH_LOCAL_STORAGE_KEY)
      );
      if (searchData) {
        setSearch(searchData);
      } else {
        setSearch({ name: "", isShort: false });
      }
    } catch (e) {
      console.log(e);
      setSearch({ name: "", isShort: false });
    }
  }, []);

  const updateSearch = (name, isShort) => {
    if (name.length <= 0) {
      setError(EMPTY_QUERY_ERROR);
      return;
    }
    setError("");
    setSearch({ name, isShort });
    localStorage.setItem(
      SEARCH_LOCAL_STORAGE_KEY,
      JSON.stringify({ name, isShort })
    );
  };

  const filteredMovies = useMemo(() => {
    if (!search || !search.name) return [];

    const filtered = movies.filter((movie) => {
      const { nameEN, nameRU, duration } = movie;
      const searchStr = search.name.toLowerCase();
      if (
        !nameRU.toLowerCase().includes(searchStr) &&
        !nameEN.toLowerCase().includes(searchStr)
      ) {
        return false;
      }

      if (search.isShort && duration > SHORT_DURATION) return false;
      return true;
    });

    return filtered;
  }, [search, movies]);

  if (loading) return <Preloader />;

  return (
    <section className="movies">
      {search && (
        <SearchForm
          error={error}
          initialSearch={search}
          updateSearch={updateSearch}
        />
      )}

      {search && search.name && (
        <MoviesCardList
          addMoreButton={true}
          movies={filteredMovies}
          savedMovies={savedMovies}
          updateSavedMovies={loadSavedMovies}
        />
      )}
    </section>
  );
}

export default Movies;
