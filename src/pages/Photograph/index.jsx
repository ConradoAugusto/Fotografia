import React from "react";
import styles from "./style.module.scss";
import { Header } from "../../componets/Header";
import tubinho from "../../assets/tubinho.jpg";
import sesc from "../../assets/sesc.jpg";
import sescTeatro from "../../assets/sescTeatro.jpg";
import food from "../../assets/food.jpg";
import autoral from "../../assets/autoral.jpg";
import cantos from "../../assets/cantos.png";
import ensaios from "../../assets/ensaios.png";
import { useNavigate } from "react-router-dom";


export const Photograph = () => {
  const navigate = useNavigate();
  return (
    <>
        <div className={styles.containerHeader}>
          <h2 className="headerName">Conrado Augusto</h2>
          <Header />
        </div>
        <main className={styles.mainPhotograph}>
          <section className={styles.containerProjects}>
            <ul className={styles.containerList}>

            <li className={styles.listProject}>
                <a href="sesc">
                  <div
                    onClick={() => navigate("/sesc")}
                    className={styles.containerBanner}
                  >
                    <h1 className={styles.titleProject}>
                      Sesc - Sorrisos
                    </h1>
                    <img className={styles.banner} src={sesc} alt="" />
                  </div>
                </a>
              </li>


            <li className={styles.listProject}>
                <a href="tubinho">
                  <div
                    onClick={() => navigate("/tubinho")}
                    className={styles.containerBanner}
                  >
                    <h1 className={styles.titleProject}>
                      Condomínio do <br />
                      Tubinho
                    </h1>
                    <img className={styles.banner} src={tubinho} alt="" />
                  </div>
                </a>
              </li>

              <li className={styles.listProject}>
                <a href="sescTeatro">
                  <div
                    onClick={() => navigate("/sescTeatro")}
                    className={styles.containerBanner}
                  >
                    <h1 className={styles.titleProject}>
                    Sesc - Teatro
                    </h1>
                    <img className={styles.banner} src={sescTeatro} alt="" />
                  </div>
                </a>
              </li>

              <li className={styles.listProject}>
                <a href="food">
                  <div
                    onClick={() => navigate("/food")}
                    className={styles.containerBanner}
                  >
                    <h1 className={styles.titleProject}>FOOD</h1>
                    <img className={styles.banner} src={food} alt="" />
                  </div>
                </a>
              </li>

              <li className={styles.listProject}>
                <a href="autoral">
                  <div
                    onClick={() => navigate("/autoral")}
                    className={styles.containerBanner}
                  >
                    <h1 className={styles.titleProject}>AUTORAL</h1>
                    <img className={styles.banner} src={autoral} alt="" />
                  </div>
                </a>
              </li>

              <li className={styles.listProject}>
                <a href="cantos">
                  <div
                    onClick={() => navigate("/cantos")}
                    className={styles.containerBanner}
                  >
                    <h1 className={styles.titleProject}>
                      ESPETÁCULO: <br />
                      CANTOS DA ÁGUA
                    </h1>
                    <img className={styles.banner} src={cantos} alt="" />
                  </div>
                </a>
              </li>

              <li className={styles.listProject}>
                <a href="ensaios">
                  <div
                    onClick={() => navigate("/ensaios")}
                    className={styles.containerBanner}
                  >
                    <h1 className={styles.titleProject}>
                      ENSAIOS FOTOGRÁFICOS
                    </h1>
                    <img className={styles.banner} src={ensaios} alt="" />
                  </div>
                </a>
              </li>
            </ul>
          </section>
        </main>
    </>
  );
};
