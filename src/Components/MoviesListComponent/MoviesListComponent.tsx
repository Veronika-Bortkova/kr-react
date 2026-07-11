import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice.ts";
import MoviesListCardsComponent from "../MoviesListCardsComponent/MoviesListCardsComponent.tsx";



const MoviesListComponent = () => {
    const dispatch = useAppDispatch();
    const movies = useAppSelector(state => state.movieStoreSlice.moviesObj.results);
    useEffect(() => {
        dispatch(movieActions.loadAllMovies());
    }, []);
    return (

        <div className={"GridMovieList"}>
            {movies.map(movie => <MoviesListCardsComponent movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default MoviesListComponent;