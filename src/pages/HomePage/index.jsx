import React from "react";
import styles from "./style.module.scss";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaArrowLeft,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const HomePage = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <div className={styles.container}>
      <nav className={styles.menuDk}>
        <ul>
          <li
            onClick={() => navigate("/photograph")}
            className="title fourBurguer semiBold"
          >
            Fotografia
          </li>
          <li
            onClick={() => navigate("/social")}
            className="title fourBurguer semiBold"
          >
            Social Media
          </li>
          <li
            onClick={() => navigate("/videomaker")}
            className="title fourBurguer semiBold"
          >
            Videomaker
          </li>
          <li
            onClick={() => navigate("/contact")}
            className="title fourBurguer semiBold"
          >
            Contatos
          </li>
        </ul>
      </nav>


{menuOpen ? (
    <nav className={styles.menuSm}>
      <ul>
        <li
          onClick={() => navigate("/photograph")}
          className="title fourBurguer semiBold"
        >
          Fotografia
        </li>
        <li
          onClick={() => navigate("/social")}
          className="title fourBurguer semiBold"
        >
          Social Media
        </li>
        <li
          onClick={() => navigate("/videomaker")}
          className="title fourBurguer semiBold"
        >
          Videomaker
        </li>
        <li
          onClick={() => navigate("/contact")}
          className="title fourBurguer semiBold"
        >
          Contatos
        </li>
      </ul>
      <span
        onClick={() => toggleMenu(false)}
        className={styles.closeBurguer}
      >
        <FaArrowLeft />
      </span>
    </nav>
  ) : null}

      <div className={styles.bcg}>
        <div className={styles.barMenu} onClick={() => toggleMenu()}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        <section>
          <div className={styles.contentAbout}>
            <h1 className="title one bold">Conrado Augusto</h1>
            <span className="title three">Fotógrafo e Videomaker</span>
            <p>
              <strong className="title three">
                Fotografia Sensível - Captar a essência de cada um.
              </strong>
            </p>
          </div>
          <div>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/conradoaugusto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn
                    size={30}
                    color="#fffffa"
                    className={styles.linked}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/conrado.augusto.52/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF
                    size={30}
                    color="#fffffa"
                    className={styles.face}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/conradoaugusto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    size={30}
                    color="#fffffa"
                    className={styles.insta}
                  />
                </a>
              </li>
              <li>
                <a
                  href="mailto:conras.augusto@gmail.com?subject=Vamos trabalhar juntos?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdEmail size={30} color="#fffffa" className={styles.mail} />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
