import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./style.module.scss";


export const GallerySocailList = ({ src, id, photos }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    setCurrentId(id);
  }, []);

  const newPhoto = () => {
    const newPhoto = photos.find((photo) => photo.id === currentId);
    const photo = newPhoto.src;
    const id = newPhoto.id;

    setCurrentPhoto(photo);
    setCurrentId(id);
  };

  // useEffect(() => {
  //   const newPhoto = photos.find((photo) => photo.id === currentId);
  //   console.log(newPhoto);
  //   const photos = newPhoto.src

  //   setCurrentPhoto(photos);
  // }, [currentId]);

  const nextPhoto = () => {
    const id = currentId + 1;
    const newPhoto = photos.find((photo) => photo.id === id);

    setCurrentId(id);
    setCurrentPhoto(newPhoto.src);
  };

  const prevPhoto = () => {
    const id = currentId - 1;
    const newPhoto = photos.find((photo) => photo.id === id);

    setCurrentId(id);
    setCurrentPhoto(newPhoto.src);
  };

  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  // useEffect(() => {
  //   if (isVisible === true) {
  //     document.body.style.overflow = "hidden";
  //   }
  // }, [isVisible]);

  // useEffect(() => {
  //   if (!isVisible === true) {
  //     document.body.style.overflow = "visible";
  //   }
  // }, [isVisible]);

  useEffect(() => {
    const handleOutclick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsVisible(false);
        setCurrentPhoto(null);
      }
    };

    window.addEventListener("mousedown", handleOutclick);

    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        buttonRef.current?.click();
        setIsVisible(false);
        setCurrentPhoto(null);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div>
      <li key={id} className="imgGallery">
        <div className="containerImg">
          <img
            src={src}
            onClick={() => (newPhoto(), setIsVisible(true))}
            alt=""
          />
        </div>
      </li>

      {isVisible ? (
        <div role="dialog" className={styles.modal}>
          <div className={styles.modalContents} ref={modalRef}>
            <AiFillCloseCircle
              ref={buttonRef}
              size={30}
              color="#fffffa7c"
              className={styles.close}
              onClick={() => setIsVisible(false)}
            />
            <button
              className={styles.previous}
              onClick={() => prevPhoto()}
              disabled={currentId === 1}
            >
              <FaArrowLeftLong color="#fffffa7c" size={30} />
            </button>
            <img className={styles.modalImg} src={currentPhoto} />
            <button
              className={styles.next}
              onClick={() => nextPhoto()}
              disabled={currentId === photos.length}
            >
              <FaArrowLeftLong color="#fffffa7c" size={30} />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
