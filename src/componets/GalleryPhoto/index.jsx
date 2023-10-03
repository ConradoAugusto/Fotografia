// import React from "react";
import styles from "./style.module.scss";
import { Header } from "../../componets/Header";
import { GalleryPhotoCard } from "./GalleryPhotoCard";


export const GalleryPhoto = () => {

  return (
    <>

      <div className={styles.containerHeader}>
        <h2 className="headerName">Conrado Augusto</h2>
        <Header />
      </div>
      <main className={styles.mainPhoto}>
        <GalleryPhotoCard/>
      </main>

    </>
  );
};
