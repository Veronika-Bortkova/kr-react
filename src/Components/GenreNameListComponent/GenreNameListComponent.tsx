import {useAppGeners} from "../../hooks/useAppGenres.ts";
import type {FC} from "react";
import "./GenreNameListComponent.css"
import type {IGenre} from "../../models/GenreModel.ts";
type propsType = {
    genres: number[] | IGenre[]
}

const GenreNameListComponent:FC<propsType> = ({genres}) => {
    const {genresDictionary} = useAppGeners();

    return (

        <>
            {genres.map((value) =>{
                if (typeof value === "object" && value !==null){
                    return <span key={value.id}>{value.name}</span>
                }
                return <span key={value}>{genresDictionary[value]}</span>
                }
            )}


        </>
    );
};

export default GenreNameListComponent;