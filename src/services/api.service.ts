import {baseUrlMovies, genresUrl, urlMovieById} from "../constants/urls.ts";
import type {IMovie, IMoviesObj} from "../models/MovieModel.ts";
import {token} from "../constants/authorization.ts";
import type {IGenreObj} from "../models/GenreModel.ts";

export const getAllMovies = async (pg:string):Promise<IMoviesObj> =>{
    return await fetch(baseUrlMovies + "?page=" + pg, {
        method: 'GET',
        headers: {

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

export const getMovieById = async (id:string):Promise<IMovie>=>{
    return await fetch(urlMovieById + "/" + id, {
        method: 'GET',
        headers: {

            'Authorization': `Bearer ${token}`,
            'accept': 'application/json'
        }
    }).then(value => value.json());
}