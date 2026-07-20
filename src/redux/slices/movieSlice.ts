import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMoviesObj} from "../../models/MovieModel.ts";
import {getAllMovies} from "../../services/api.service.ts";
type movieSliceType ={
    moviesObj: IMoviesObj;
}

export const initMoviesSliceState:movieSliceType = {moviesObj:{
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    }};

const loadAllMovies = createAsyncThunk("loadAllMovies", async (pg:string, thunkAPI) => {
    const allMoviesObj = await getAllMovies(pg);
    return thunkAPI.fulfillWithValue(allMoviesObj);
})
export const movieSlice = createSlice({
    name: "movieSlice",
    initialState: initMoviesSliceState,
    reducers: {
        clearMoviesState: (state) => {
            state.moviesObj = initMoviesSliceState.moviesObj;
        }
    },
    extraReducers: builder =>
        builder.addCase(loadAllMovies.fulfilled, (state, action:PayloadAction<IMoviesObj>)=>{
            state.moviesObj = action.payload;
        })

})

export const movieActions = {...movieSlice.actions, loadAllMovies}