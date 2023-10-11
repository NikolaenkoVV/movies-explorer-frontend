import "./AboutMe.css";
import photo from "../../images/photo.png";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__info">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__description">Инженер-технолог, 34 года</p>
          <p className="about-me__text">
            Я родился и живу в Симферополе, закончил архитектурно-строительный
            факультет НАПКС в 2010 году. Работал преподавателем, сейчас
            занимаюсь техническим обследованием зданий и сооружений, немного
            научными исследованиями. У меня есть жена и дочь. Интересуюсь
            спортом. Решил попробовать свои силы в веб-разработке на курсах
            Яндекс.Практикум.
          </p>
          <a href="https://github.com/NikolaenkoVV" className="about-me__link">
            Github
          </a>
        </div>
        <img src={photo} alt="Фото студента" className="about-me__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
