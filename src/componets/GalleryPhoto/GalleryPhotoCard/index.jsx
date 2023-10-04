import { useState, useEffect } from "react";
import { GalleryPhotoList } from "../GalleryPhotoList";
import { autoral } from "../autoral.js";
import { tubinho } from "../tubinho.js";
import { food } from "../food.js";
import { cantos } from "../cantos.js";
import { ensaios } from "../ensaios.js";
import { sesc } from "../sesc";
import { sescTeatro } from "../sescTeatro";

export const GalleryPhotoCard = () => {
  const location = window.location.pathname;

  const [array, setArray] = useState([]);

  useEffect(() => {

    if (location === "/sesc") {
      setArray(sesc);
    }

    if (location === "/sescTeatro") {
      setArray(sescTeatro);
    }

    if (location === "/tubinho") {
      setArray(tubinho);
    }
    if (location === "/food") {
      setArray(food);
    }
    if (location === "/autoral") {
      setArray(autoral);
    }
    if (location === "/cantos") {
      setArray(cantos);
    }
    if (location === "/ensaios") {
      setArray(ensaios);
    }
    [array];
  });
  
  return (
      <ul className="galleryPhoto" key={"uxy987xw987xt98sx987x"}>
        {array?.map(({ src, id }) => (
          <GalleryPhotoList id={id} src={src} array={array} />
        ))}
      </ul>
  );
};
