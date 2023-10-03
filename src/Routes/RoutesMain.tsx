import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Photograph } from "../pages/Photograph";
import { SocialMedia } from "../pages/SocialMedia";
import { Videomaker } from "../pages/Videomaker";
import { ErrorPage } from "../pages/ErrorPage";
import React from "react";
import { GalleryPhoto } from "../componets/GalleryPhoto";
import { Contact } from "../pages/Contact";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/photograph" element={<Photograph />} />
      <Route path="/food" element={<GalleryPhoto />} />
      <Route path="/autoral" element={<GalleryPhoto />} />
      <Route path="/cantos" element={<GalleryPhoto />} />
      <Route path="/ensaios" element={<GalleryPhoto />} />
      <Route path="/social" element={<SocialMedia />} />
      <Route path="/videomaker" element={<Videomaker />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
 