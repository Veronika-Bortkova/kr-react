import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie, IMoviesObj} from "../../models/MovieModel.ts";
import {getAllMovies, getMovieById} from "../../services/api.service.ts";
type movieSliceType ={
    moviesObj: IMoviesObj;
    lastClickedMovieId: number|null;
    movieObj:IMovie | null

}

export const initMoviesSliceState:movieSliceType = {
    moviesObj:{
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
        },
    lastClickedMovieId: null,
    movieObj: null

};

const loadAllMovies = createAsyncThunk("loadAllMovies", async (pg:string, thunkAPI) => {
    const allMoviesObj = await getAllMovies(pg);
    return thunkAPI.fulfillWithValue(allMoviesObj);
})
const loadMovieById = createAsyncThunk ("loadMovieById", async (movieId:string, thunkAPI) =>{
    const movieById = await getMovieById(movieId);
    return thunkAPI.fulfillWithValue(movieById);
})

export const movieSlice = createSlice({
    name: "movieSlice",
    initialState: initMoviesSliceState,
    reducers: {
        clearMoviesState: (state) => {
            state.moviesObj = initMoviesSliceState.moviesObj;
        },
        setLastClickedMovieId: (state, action: PayloadAction<number>) => {
            state.lastClickedMovieId = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadAllMovies.fulfilled, (state, action:PayloadAction<IMoviesObj>)=>{
            state.moviesObj = action.payload;
        })
            .addCase(loadMovieById.fulfilled, (state, action:PayloadAction<IMovie>)=>{
                state.movieObj = action.payload;
            })

})

export const movieActions = {...movieSlice.actions, loadAllMovies, loadMovieById}