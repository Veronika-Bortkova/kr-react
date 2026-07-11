import {baseUrlMovies, genresUrl} from "../constants/urls.ts";
import type {IMoviesObj} from "../models/MovieModel.ts";
import {token} from "../constants/authorization.ts";
import type {IGenreObj} from "../models/GenreModel.ts";

export const getAllMovies = async ():Promise<IMoviesObj> =>{
    return await fetch(baseUrlMovies, {
        method: 'GET',
        headers: {
            // Важно: слово Bearer и пробел перед токеном обязательны!
            'Authorization': `Bearer ${token}`,
            'accept': 'application/json'
        }
    }).then(value => value.json());
}

export const getGenres = async ():Promise<IGenreObj>=> {
    return await fetch(genresUrl, {
        method: 'GET',
        headers: {

            'Authorization': `Bearer ${token}`,
            'accept': 'application/json'
        }
    }).then(value => value.json());
}