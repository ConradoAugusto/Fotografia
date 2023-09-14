import React from "react";
import styles from "./style.module.scss";
import { Header } from "../../componets/Header";
import { GallerySocailCard } from "../../componets/SocialMedia/GallerySocialCard";

export const SocialMedia = () => {
  return (
    <>
        <div className={styles.containerHeader}>
          <h2 className="headerName">Conrado Augusto</h2>
          <Header />
        </div>

        <main className={styles.mainSocial}>
          <GallerySocailCard />
        </main>

    </>
  );
};
