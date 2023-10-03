import { GallerySocailList } from "../GallerySocailList";
import {photos}  from "../index";


export const GallerySocailCard = () => {
    return( 
        <ul className="galleryPhoto" key={"iudtysod87f0897s60d879f60djhco"}>
       {photos?.map(({src, id}) => <GallerySocailList id={id} src={src} photos={photos}
       />)}
    </ul>
    )
}