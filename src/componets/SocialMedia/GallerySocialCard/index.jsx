import { GallerySocailList } from "../GallerySocailList";
import {photos}  from "../index";


export const GallerySocailCard = () => {
    return( 
        <ul className="gallery" key={photos.length}>
       {photos?.map(({src, id}) => <GallerySocailList id={id} src={src}
       />)}
    </ul>
    )
}