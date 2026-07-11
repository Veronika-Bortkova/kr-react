import {useAppDispatch} from "../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../redux/hooks/useAppSelector.ts";
import {useEffect} from "react";
import {genreActions} from "../redux/slices/genreSlice.ts";

export const useAppGeners = ()=>{
const dispatch = useAppDispatch();
const genres = useAppSelector(state => state.genreStoreSlice.genres);
useEffect(() => {
    if(genres.genres.length===0){
        dispatch(genreActions.loadGenres());
    }
}, [dispatch, genres.genres.length]);

    const genresDictionary = genres.genres.reduce((acc, currentGenre) => {
        acc[currentGenre.id] = currentGenre.name;
        return acc;
    }, {} as Record<number, string>)

return {genres, genresDictionary};
}