import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMoviesObj} from "../../models/MovieModel.ts";
import {getAllMovies} from "../../services/api.service.ts";
type movieSliceType ={
    moviesObj: IMoviesObj;
    isLoading: boolean;
    error: string|null
}

export const initMoviesSliceState:movieSliceType = {
    moviesObj:{
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
        },
    isLoading: true,
    error: null

};

const loadAllMovies = createAsyncThunk("loadAllMovies", async (pg:string, thunkAPI) => {
    try {const allMoviesObj = await getAllMovies(pg);
        return thunkAPI.fulfillWithValue(allMoviesObj);
    } catch (e){
        console.log(e);
        return thunkAPI.rejectWithValue("Loading error")
    }
})

export const movieSlice = createSlice({
    name: "movieSlice",
    initialState: initMoviesSliceState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadAllMovies.fulfilled, (state, action:PayloadAction<IMoviesObj>)=>{
            state.moviesObj = action.payload;
            state.isLoading = false
            })
            .addCase(loadAllMovies.pending, (state)=>{
                state.isLoading = true;
                state.error = null
            })
            .addCase(loadAllMovies.rejected, (state, action)=>{
                state.isLoading = false;
                state.error = action.payload as string
            })

})

export const movieActions = {...movieSlice.actions, loadAllMovies}