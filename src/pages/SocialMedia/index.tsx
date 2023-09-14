import React from "react";
import styles from "./style.module.scss";
import { Header } from "../../componets/Header";
import { GallerySocailCard } from "../../componets/SocialMedia/GallerySocialCard";
import FadeIn from "react-fade-in/lib/FadeIn";

export const SocialMedia = () => {
  return (
    <>
        <div className={styles.containerHeader}>
          <h2 className="headerName">Conrado Augusto</h2>
          <Header />
        </div>
      <FadeIn>
        <main className={styles.mainSocial}>
          <GallerySocailCard />
        </main>
      </FadeIn>
    </>
  );
};
