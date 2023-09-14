export const GallerySocailList = ({src, id}) => {

  return (
    <>
      <li id={id} className="imgGallery">
        <div className="containerImg">
        <img src={src} alt="" />
        </div>
      </li>
    </>
  );
};
