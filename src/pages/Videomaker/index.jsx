import React from "react";
import styles from "./style.module.scss";
import { Header } from "../../componets/Header";
export const Videomaker = () => {
  return (
    <>
      <div className={styles.containerHeader}>
        <h2 className="headerName">Conrado Augusto</h2>
        <Header />
      </div>

      <main className={styles.containerMain}>
        <section className={styles.containerProjects}>
          <div className={styles.youtube}>
            <iframe
              className={styles.cap}
              width="500"
              height="290"
              src="https://www.youtube.com/embed/0JLaGJVifFA?autoplay=1&mute=0"
              title="Episódio 1 - Curva Sutil"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <p className="title description size ">
              <h1>Episódio 1 - Curva Sutil</h1>
              <span className="line"></span>
              <br />
              Uma jornada de encontros se inicia. As portas abertas de um lugar
              que nos espera e convida a explorar o quintal dos cantos em risos.
              Neste quintal, a grama se alinha, os objetos se renovam, a água
              ganha vida quando, livremente, pássaros cantam gargalhadas.
              Sorriso: curva que corre fora da gente Em um mergulho na casa, em
              quarentena, proporcionamos um reencontro com nós mesmos. Com{" "}
              <span className="title hastag bold">
                <a
                  className="title insta"
                  href="https://www.instagram.com/floreiateatro/"
                  target="blank"
                >
                  @FloreiaTeatro.
                </a>{" "}
              </span>
              <br />
              <span className="title hastag ">#programaçãosescsp </span>{" "}
              <span className="title hastag ">#saúde </span>
              <span className="title hastag">#videodebate </span>{" "}
              <span className="title hastag">#saúdebucal </span>
              <span className="title hastag ">#BocaPraQueTeQuero</span>
            </p>
          </div>

          <div className={styles.youtube}>
            <iframe
              className={styles.cap}
              width="500"
              height="290"
              src="https://www.youtube.com/embed/3gmBlM3CkiE"
              title="Episódio 2 - Curva em quadros"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <p className="title description size ">
              <h1>Episódio 2 - Curva em quadros</h1>
              <span className="line"></span>
              <br />
              Partindo desse quintal, entramos em uma sala única decorada de
              momentos. Quadros rodeiam as paredes e aguardam para ganharem
              vida. Nessa bagunça de lembranças nasce uma nova possibilidade: a
              beleza de um sorriso expressado verdadeiramente, sem preocupações
              e carregando suas imperfeições. Com{" "}
              <span className="title hastag bold">
                <a
                  className="title insta"
                  href="https://www.instagram.com/floreiateatro/"
                  target="blank"
                >
                  @FloreiaTeatro.
                </a>{" "}
              </span>
              <br />
              <span className="title hastag ">#programaçãosescsp </span>
              <span className="title hastag ">#saúde </span>
              <span className="title hastag">#videodebate </span>
              <span className="title hastag">#saúdebucal </span>
              <span className="title hastag ">#BocaPraQueTeQuero</span>
            </p>
          </div>

          <div className={styles.youtube}>
            <iframe
              className={styles.cap}
              width="500"
              height="290"
              src="https://www.youtube.com/embed/g1W2BiDigjY"
              title="Episódio 3 - Curva de um, mil"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <p className="title description size ">
              <h1>Episódio 3 - Curva de um, mil</h1>
              <span className="line"></span>
              <br />
              Continuando as descobertas pela casa dos encontros, nos vemos em
              uma cozinha de céu aberto, polvilhada por uma plateia de estrelas.
              Nessa cozinha experimentamos, como nunca antes, os movimentos que
              nos permitem sentir um mundo de sabores. Com{" "}
              <span className="title hastag bold">
                <a
                  className="title insta"
                  href="https://www.instagram.com/floreiateatro/"
                  target="blank"
                >
                  @FloreiaTeatro.
                </a>{" "}
              </span>
              <br />
              <span className="title hastag ">#programaçãosescsp </span>
              <span className="title hastag ">#saúde </span>
              <span className="title hastag">#videodebate </span>
              <span className="title hastag">#saúdebucal </span>
              <span className="title hastag ">#BocaPraQueTeQuero</span>
            </p>
          </div>

          <div className={styles.youtube}>
            <iframe
              className={styles.cap}
              width="500"
              height="290"
              src="https://www.youtube.com/embed/o07MdlX_mR4"
              title="Episódio 4 - Curva silencia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>

            <p className="title description size ">
              <h1>Episódio 4 - Curva silencia</h1>
              <span className="line"></span>
              <br />
              Finalizando nossa jornada, nos deitamos em silêncio. O quarto que
              abraça o despir do choro e encontra neste espaço, silêncio, o
              sorriso interno. Olhamos para a janela, e sorrimos nesse novo
              cenário, com os olhos, com os braços, com a verdade. Com{" "}
              <span className="title hastag bold">
                <a
                  className="title insta"
                  href="https://www.instagram.com/floreiateatro/"
                  target="blank"
                >
                  @FloreiaTeatro.
                </a>{" "}
              </span>
              <br />
              <span className="title hastag ">#programaçãosescsp </span>
              <span className="title hastag ">#saúde </span>
              <span className="title hastag">#videodebate </span>
              <span className="title hastag">#saúdebucal </span>
              <span className="title hastag ">#BocaPraQueTeQuero</span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};
