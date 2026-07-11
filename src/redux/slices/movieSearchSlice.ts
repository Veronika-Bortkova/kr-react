import {createSlice} from "@reduxjs/toolkit";
import type {IMoviesObj} from "../../models/MovieModel.ts";
type movieSearchSliceType ={
    moviesObj: IMoviesObj;
}

export const initMoviesSearchSliceState:movieSearchSliceType = {moviesObj:{
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    }};
export const movieSearchSlice = createSlice({
    name: "movieSearchSlice",
    initialState: initMoviesSearchSliceState,
    reducers: {},
    extraReducers: builder => builder

})

export const movieSearchActions = {...movieSearchSlice.actions}