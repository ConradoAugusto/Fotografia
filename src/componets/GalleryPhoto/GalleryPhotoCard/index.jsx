import { useState, useEffect } from "react";
import { GalleryPhotoList } from "../GalleryPhotoList";
import { autoral } from "../autoral.js";
import { food } from "../food.js";
import { cantos } from "../cantos.js";
import { ensaios } from "../ensaios.js";

export const GalleryPhotoCard = () => {
  const location = window.location.pathname;

  const [array, setArray] = useState([]);



  useEffect(() => {
    if(location === "/food") {
        setArray(food)
    }
    if(location === "/autoral") {
        setArray(autoral)
    }
    if(location === "/cantos") {
        setArray(cantos)
    }
    if(location === "/ensaios") {
        setArray(ensaios)
    }
    [array]});

  return (
    <ul className="galleryPhoto" key={array.length}>
      {array?.map(({ src, id }) => (
        <GalleryPhotoList id={id} src={src} />
      ))}
    </ul>
  );
};
