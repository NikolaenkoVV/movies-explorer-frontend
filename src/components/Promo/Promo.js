import "./Promo.css";
import promoIllustration from "../../images/promo-illustration.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__content">
        <div className="promo__text">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__hint">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a href="#about-project" className="promo__link">
            Узнать больше
          </a>
        </div>
        <img
          src={promoIllustration}
          alt="Изображение планеты Земля с водой, составленной из слова WEB"
          className="promo__illustration"
        />
      </div>
    </section>
  );
}

export default Promo;
