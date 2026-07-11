import {useAppGeners} from "../../hooks/useAppGenres.ts";
import type {FC} from "react";
import "./GenreNameListComponent.css"
type propsType = {
    genres: number[]
}

const GenreNameListComponent:FC<propsType> = ({genres}) => {
    const {genresDictionary} = useAppGeners();

    return (

        <>
            {genres.map(genreNumber => <span key={genreNumber}>{genresDictionary[genreNumber]}</span>)}

        </>
    );
};

export default GenreNameListComponent;