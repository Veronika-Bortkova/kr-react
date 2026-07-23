import type {FC} from "react";
import type {IMovie} from "../../models/MovieModel.ts";
import GenreNameListComponent from "../GenreNameListComponent/GenreNameListComponent.tsx";
import StarsRatingComponent from "../StarsRatingComponent/StarsRatingComponent.tsx";
import PosterPreviewComponent from "../PosterPreviewComponent/PosterPreviewComponent.tsx";
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import "./MoviesListCardComponent.css"
import {movieCardActions} from "../../redux/slices/movieCardSlice.ts";
type PropsType = {
    movie: IMovie
}

const MoviesListCardComponent:FC<PropsType> = ({movie}) => {
    const dispatch = useAppDispatch();
    const lastClickedId = useAppSelector(state => state.movieCardStoreSlice.lastClickedMovieId);
    const handleCardClick = () => {
        dispatch(movieCardActions.setLastClickedMovieId(movie.id));
    };
    return (

            <div className={"listCard"}>
                <NavLink to={"moviesCard/"+movie.id} className={movie.id === lastClickedId ? "cardLinkActive" : "cardLink"}
                         onClick={handleCardClick}>
                    <div className={"top_partCard"}>

                        <PosterPreviewComponent poster_path={movie.poster_path} size={"w342"}/>
                        <h2>{movie.title}</h2>
                        <div className={"genreWrapper"}><GenreNameListComponent genres={movie.genre_ids}/></div>
                    </div>

                    <div className={"stars"}><StarsRatingComponent vote_average={movie.vote_average}/></div>
                </NavLink>
            </div>

    );
};

export default MoviesListCardComponent;