export const GalleryPhotoList = ({ src }) => {
  return (
    <>
      <li className="imgGallery">
        <div className="containerImg">
          <img src={src} alt="" />
        </div>
      </li>
    </>
  );
};
