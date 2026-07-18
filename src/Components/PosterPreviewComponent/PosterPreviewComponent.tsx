
import {posterUrl} from "../../constants/urls.ts";
import type {FC} from "react";
type propsType = {
    poster_path:string
    size: string
}

const PosterPreviewComponent:FC<propsType> = ({poster_path, size}) => {
    return (
        <div className={"divPoster"}>
            <img className={"poster"} src={posterUrl+size+poster_path} alt="poster"></img>
        </div>
    );
};

export default PosterPreviewComponent;