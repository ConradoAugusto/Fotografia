import React from "react";
import styles from "./style.module.scss";
import FadeIn from "react-fade-in";
import { Header } from "../../componets/Header";

export const Videomaker = () => {
  return (
    <>
      <div className={styles.containerHeader}>
        <h2 className="headerName">Conrado Augusto</h2>
        <Header />
      </div>
      <FadeIn>
        <main className={styles.containerMain}>
          <section className={styles.containerProjects}>
            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/0JLaGJVifFA"
              title="Episódio 1 - Curva Sutil"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/3gmBlM3CkiE"
              title="Episódio 2 - Curva em quadros"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           
            ></iframe>

            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/g1W2BiDigjY"
              title="Episódio 3 - Curva de um, mil"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           
            ></iframe>

            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/o07MdlX_mR4"
              title="Episódio 4 - Curva silencia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </section>
        </main>
      </FadeIn>
    </>
  );
};
