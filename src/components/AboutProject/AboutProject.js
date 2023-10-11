import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__content">
        <div className="about-project__info">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__chart">
        <div className="about-project__chart-info">
          <label className="about-project__term">1 неделя</label>
          <label className="about-project__chart-description">Back-end</label>
        </div>
        <div className="about-project__chart-info about-project__chart-info_type_frontend">
          <label className="about-project__term about-project__term_type_frontend">4 недели</label>
          <label className="about-project__chart-description">Front-end</label>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
