
import {posterUrl} from "../../constants/urls.ts";
import type {FC, SyntheticEvent} from "react";
import defaultImage from "../../imeges/placeholder.jpg";
type propsType = {
    poster_path:string | null
    size: string
}

const PosterPreviewComponent:FC<propsType> = ({poster_path, size}) => {
    const imageSrc = poster_path ? posterUrl+size+poster_path : defaultImage;
    const handleError = (e:SyntheticEvent<HTMLImageElement>) => {
        const target = e.currentTarget;

        if (target.src !== defaultImage) {
            target.onerror = null;
            target.src = defaultImage;
        }
    }
    return (
        <div className={"divPoster"}>
            <img className={"poster"} src={imageSrc} alt="poster" onError={handleError} ></img>
        </div>
    );
};

export default PosterPreviewComponent;

