import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices/movieSlice.ts";
import {useSearchParams} from "react-router-dom";
import "./MoviesListComponent.css"
import MoviesListCardComponent from "../MoviesListCardsComponent/MoviesListCardComponent.tsx";



const MoviesListComponent = () => {
    const dispatch = useAppDispatch();
    const moviesObj = useAppSelector(state => state.movieStoreSlice.moviesObj);
    const movies = moviesObj.results;
    const isLoading = useAppSelector(state => state.movieStoreSlice.isLoading);
    const error = useAppSelector(state => state.movieStoreSlice.error);

    const [pgMovie] = useSearchParams();
    const currentPage = pgMovie.get("pg") ||"1";

    useEffect(() => {
        const isCacheValid = moviesObj.page === Number(currentPage) && movies.length > 0;
        if(!isCacheValid){
            dispatch(movieActions.loadAllMovies(currentPage));
        }
    }, [currentPage, dispatch,moviesObj.page,movies.length]);
    if(error){
        return <div className={"errorLoadingMovies"}>{error}</div>
    }
    if(isLoading){
        return <div className={"loading"}>Loading movies..</div>
    }

    return (

        <div className={"GridMovieList"}>
            {movies.map(movie => <MoviesListCardComponent movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default MoviesListComponent;