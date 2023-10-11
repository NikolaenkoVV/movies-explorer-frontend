import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <section className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__description">Страница не найдена</p>
      <Link to="/" className="page-not-found__link">
        Назад
      </Link>
    </section>
  );
}

export default PageNotFound;
