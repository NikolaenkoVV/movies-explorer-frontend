import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ error, initialSearch, updateSearch }) {
  const [searchQuery, setSearchQuery] = useState(initialSearch.name);
  const [isShort, setIsShort] = useState(initialSearch.isShort);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const updateSearchInner = (name, isShort) => {
    updateSearch(name, isShort);
  };

  const handleCheckBoxChange = () => {
    const newIsShort = !isShort;
    setIsShort(newIsShort);
    updateSearchInner(searchQuery, newIsShort);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSearchInner(searchQuery, isShort);
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <input
          className="search__input"
          placeholder="Фильм"
          type="text"
          value={searchQuery || ""}
          required
          onChange={handleSearchChange}
        ></input>

        {error && <span className={`search__error`}>{error}</span>}

        <button className="search__button" type="submit">
          Найти
        </button>
      </form>
      <div className="search__switch-box">
        <label className="search__switch">
          <input
            type="checkbox"
            checked={isShort}
            className="search__checkbox"
            onChange={handleCheckBoxChange}
          />
          <span className="search__slider"></span>
        </label>
        <p className="search__switch-quote">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
