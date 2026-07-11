import {createSlice} from "@reduxjs/toolkit";
import type {IMoviesObj} from "../../models/MovieModel.ts";
type movieSliceType ={
    moviesWithGenreObj: IMoviesObj;
}

export const initMovieWithGenreSlice:movieSliceType = {moviesWithGenreObj:{
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    }};
export const movieWithGenreSlice = createSlice({
    name: "movieWithGenreSlice",
    initialState: initMovieWithGenreSlice,
    reducers: {},
    extraReducers: builder => builder

})

export const movieWithGenreActions = {...movieWithGenreSlice.actions}