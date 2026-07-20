
import {posterUrl} from "../../constants/urls.ts";
import type {FC} from "react";
import defaultImage from "../../imeges/placeholder.jpg";
type propsType = {
    poster_path:string | null
    size: string
}

const PosterPreviewComponent:FC<propsType> = ({poster_path, size}) => {
    const imageSrc = poster_path ? posterUrl+size+poster_path : defaultImage;
    return (
        <div className={"divPoster"}>
            <img className={"poster"} src={imageSrc} alt="poster"></img>
        </div>
    );
};

export default PosterPreviewComponent;

