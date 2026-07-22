import "./MovieInfoOverviewComponent.css"
import type {FC} from "react";
import type {IMovie} from "../../models/MovieModel.ts";
type propsType = {
    movie:IMovie
}

const MovieInfoOverviewComponent:FC<propsType> = ({movie}) => {
    return (
        <div className={"overview"}>
        <p>{movie.overview}</p>
        </div>
    );
};

export default MovieInfoOverviewComponent;