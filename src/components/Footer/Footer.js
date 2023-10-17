import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__info">
        <p className="footer__year">&copy; 2023</p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <a
                href="https://practicum.yandex.ru/"
                className="footer__nav-link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__nav-item">
              <a
                href="https://github.com/NikolaenkoVV"
                className="footer__nav-link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
