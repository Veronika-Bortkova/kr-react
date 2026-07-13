import type {FC} from "react";
import type {IMovie} from "../../models/MovieModel.ts";
import GenreNameListComponent from "../GenreNameListComponent/GenreNameListComponent.tsx";
import StarsRatingComponent from "../StarsRatingComponent/StarsRatingComponent.tsx";
import PosterPreviewComponent from "../PosterPreviewComponent/PosterPreviewComponent.tsx";
type PropsType = {
    movie: IMovie
}

const MoviesListCardsComponent:FC<PropsType> = ({movie}) => {
    return (
        <div className={"listCard"}>
            <div className={"top_partCard"}>

                <PosterPreviewComponent poster_path={movie.poster_path} size={"w342"}/>
                <h2>{movie.title}</h2>
                <div className={"genreWrapper"}><GenreNameListComponent genres={movie.genre_ids}/></div>
            </div>

            <div className={"stars"}><StarsRatingComponent vote_average={movie.vote_average}/></div>

        </div>
    );
};

export default MoviesListCardsComponent;