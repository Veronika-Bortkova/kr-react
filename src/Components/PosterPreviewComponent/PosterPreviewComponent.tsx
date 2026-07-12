
import {posterUrl} from "../../constants/urls.ts";
import type {FC} from "react";
type propsType = {
    poster_path:string
    size: string
}

const PosterPreviewComponent:FC<propsType> = ({poster_path, size}) => {
    return (
        <>
            <img className={"poster"} src={posterUrl+size+poster_path} alt="poster"></img>
        </>
    );
};

export default PosterPreviewComponent;