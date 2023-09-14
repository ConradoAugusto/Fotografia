import React from "react";
import styles from "./style.module.scss";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import FadeIn from "react-fade-in/lib/FadeIn";

export const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.bcg}>
      <FadeIn>
        <nav>
          <ul>
            <li onClick={() => navigate("/photograph")} className="title four semiBold">Fotografia</li>
            <li onClick={() => navigate("/social")} className="title four semiBold">Social Media</li>
            <li onClick={() => navigate("/videomaker")} className="title four semiBold">Videomaker</li>
          </ul>
        </nav>

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
                <a href="https://www.linkedin.com/in/conradoaugusto/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={30} color="#fffffa"/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/conrado.augusto.52/" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={30} color="#fffffa" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/conradoaugusto/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} color="#fffffa"/>
                </a>
              </li>
              <li>
                <a href="mailto:conras.augusto@gmail.com?subject=Vamos trabalhar juntos?" target="_blank" rel="noopener noreferrer">
                  <MdEmail size={30} color="#fffffa"/>
                </a>
              </li>
            </ul>
          </div>
        </section>
    </FadeIn>
      </div>
    </div>
  );
};
