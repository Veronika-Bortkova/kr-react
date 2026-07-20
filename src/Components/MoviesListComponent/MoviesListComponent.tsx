import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice.ts";
import MoviesListCardsComponent from "../MoviesListCardsComponent/MoviesListCardsComponent.tsx";
import {useSearchParams} from "react-router-dom";



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
            {movies.map(movie => <MoviesListCardsComponent movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default MoviesListComponent;