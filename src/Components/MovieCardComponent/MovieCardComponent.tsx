import "./MovieCardComponent.css"
import PosterPreviewComponent from "../PosterPreviewComponent/PosterPreviewComponent.tsx";
import StarsRatingComponent from "../StarsRatingComponent/StarsRatingComponent.tsx";
import MovieInfoHeaderComponent from "../MovieInfoHeaderComponent/MovieInfoHeaderComponent.tsx";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice.ts";
import MovieInfoOverviewComponent from "../MovieInfoOverviewComponent/MovieInfoOverviewComponent.tsx";

const MovieCardComponent = () => {
    const { movieId } = useParams();
    const movies = useAppSelector(state => state.movieStoreSlice.moviesObj.results);
    const downloadedMovie = useAppSelector(state =>state.movieStoreSlice.movieObj);
    const dispatch = useAppDispatch();
   const movie = (movieId ? movies.find(m => m.id === +movieId) : undefined) || downloadedMovie;
    useEffect(() => {
        if (movieId && !movie){
            dispatch(movieActions.loadMovieById(movieId))
        }
    }, [movieId, movie, dispatch]);
    if (!movie) {
        return <div>Loading movie details...</div>;
    }

    return (
        <div className={"movieCard"}>
            <div className={"topBlock"}>
                <PosterPreviewComponent poster_path={movie.backdrop_path} size={"w500"}/>
                <div className={"wrapperInfoWithStar"}>
                    <MovieInfoHeaderComponent movie={movie}/>
                    <div className={"wrapperStarCount"} >
                        <StarsRatingComponent vote_average={movie.vote_average}/>
                        <p className={"vote"}>{movie.vote_count} votes</p>
                    </div>
                </div>
            </div>
            <MovieInfoOverviewComponent movie={movie}/>

        </div>
    );
};

export default MovieCardComponent;