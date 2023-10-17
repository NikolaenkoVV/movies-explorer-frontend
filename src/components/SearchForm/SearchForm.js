import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input
          className="search__input"
          placeholder="Фильм"
          type="text"
          required
        ></input>
        <button className="search__button" type="submit">Найти</button>
      </form>
      <div className="search__switch-box">
        <label className="search__switch">
          <input type="checkbox" className="search__checkbox"/>
          <span className="search__slider"></span>
        </label>
        <p className="search__switch-quote">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
