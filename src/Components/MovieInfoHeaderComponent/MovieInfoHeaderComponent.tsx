import "./MovieInfoHeaderComponent.css"
import type {FC} from "react";
import type {IMovie} from "../../models/MovieModel.ts";
import GenreNameListComponent from "../GenreNameListComponent/GenreNameListComponent.tsx";
type propsType = {
    movie: IMovie
}

const MovieInfoHeaderComponent:FC<propsType> = ({movie}) => {
    return (
        <div className={"wrapperMovieInfo"}>
            <h1>{movie.title}</h1>
            <div className={"genresOfCard"}>
                <GenreNameListComponent genres={movie.genres || movie.genre_ids}/>
            </div>
            <p className={"Release"}>Release Date: {movie.release_date}</p>
            <p className={"OriginalAudio"}>Original Audio - {movie.original_language}</p>
            <p className={"Adult"}>Adult Content: {movie.adult ? "Yes" : "No" }</p>
        </div>
    );
};

export default MovieInfoHeaderComponent;