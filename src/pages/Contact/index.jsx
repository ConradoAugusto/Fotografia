import React from "react";
import styles from "./style.module.scss";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { Header } from "../../componets/Header";

export const Contact = () => {
  return (
    <div>
      <div className={styles.containerHeader}>
        <h2 className="headerName">Conrado Augusto</h2>
        <Header />
      </div>
      <main className={styles.main}>
        <ul className={styles.containerSocial}>
          <li>
            <a
              href="https://www.linkedin.com/in/conradoaugusto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={70} color="#fffffa" className={styles.linked} />
            </a>
            <h2 className={styles.nameSocial}>LinkedIn</h2>
          </li>
          <li>
            <a
              href="https://www.facebook.com/conrado.augusto.52/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={70} color="#fffffa" className={styles.face} />
            </a>
            <h2 className={styles.nameSocial}>Facebook</h2>
          </li>
          <li>
            <a
              href="https://www.instagram.com/conradoaugusto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram size={70} color="#fffffa" className={styles.insta}/>
            </a>
            <h2 className={styles.nameSocial}>Instagram</h2>
          </li>
          <li>
            <a
              href="https://wa.me/5519933006134"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp size={70} color="#fffffa" className={styles.whats}/>
            </a>
            <h2 className={styles.nameSocial}>Whatsapp</h2>
          </li>
          <li>
            <a
              href="mailto:conras.augusto@gmail.com?subject=Vamos trabalhar juntos?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail size={70} color="#fffffa" className={styles.mail} />
            </a>
            <h2 className={styles.nameSocial}>E-mail</h2>
          </li>
        </ul>
      </main>
    </div>
  );
};
