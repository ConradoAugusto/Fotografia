// import React from "react";
import styles from "./style.module.scss";
import { Header } from "../../componets/Header";
// import { Footer } from "../../componets/Footer";
import { GalleryPhotoCard } from "./GalleryPhotoCard";
import FadeIn from "react-fade-in/lib/FadeIn";



export const GalleryPhoto = () => {
  return (
    <>

      <div className={styles.containerHeader}>
        <h2 className="headerName">Conrado Augusto</h2>
        <Header />
      </div>
    <FadeIn>
      <main className={styles.mainPhoto}>
        <GalleryPhotoCard/>
      </main>
      {/* <Footer /> */}
    </FadeIn>
    </>
  );
};
