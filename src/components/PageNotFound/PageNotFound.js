import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  
  const handlerGoBack = () => {
    navigate(-1);
  }
  return (
    <section className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__description">Страница не найдена</p>
      <a href="#" className="page-not-found__link" onClick={handlerGoBack}>
        Назад
      </a>
    </section>
  );
}

export default PageNotFound;
