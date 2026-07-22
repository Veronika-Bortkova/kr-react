import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice.ts";
import {useSearchParams} from "react-router-dom";
import "./MoviesListComponent.css"
import MoviesListCardComponent from "../MoviesListCardsComponent/MoviesListCardComponent.tsx";



const MoviesListComponent = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movieStoreSlice.moviesObj.results);
    const [pgMovie] = useSearchParams();
    const currentPage = pgMovie.get("pg") ||"1";
    useEffect(() => {
        dispatch(movieActions.loadAllMovies(currentPage));
    }, [currentPage]);
    return (

        <div className={"GridMovieList"}>
            {movies.map(movie => <MoviesListCardComponent movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default MoviesListComponent;