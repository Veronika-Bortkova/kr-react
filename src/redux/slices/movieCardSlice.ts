import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../models/MovieModel.ts";
import {getMovieById} from "../../services/api.service.ts";
type movieCardSliceType ={
    movieObj:IMovie | null;
    lastClickedMovieId: number|null;
    isLoading: boolean;
    error: string|null
}

export const initMoviesCardSliceState:movieCardSliceType = {
    movieObj: null,
    lastClickedMovieId: null,
    isLoading: false,
    error: null
};

const loadMovieById = createAsyncThunk ("loadMovieById", async (movieId:string, thunkAPI) =>{
    try {
        const movieById = await getMovieById(movieId);
        return thunkAPI.fulfillWithValue(movieById);
    }
    catch (e){
        console.log(e);
        return thunkAPI.rejectWithValue("Loading error")
    }

})

export const movieCardSlice = createSlice({
    name: "movieCardSlice",
    initialState: initMoviesCardSliceState,
    reducers: {
        setLastClickedMovieId: (state, action: PayloadAction<number>) => {
            state.lastClickedMovieId = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadMovieById.fulfilled, (state, action:PayloadAction<IMovie>)=>{
                state.movieObj = action.payload;
                state.isLoading = false
            })
            .addCase(loadMovieById.rejected, (state, action)=>{
                state.error = action.payload as string;
                state.isLoading = false;
            })
            .addCase(loadMovieById.pending, (state)=>{
                state.isLoading = true;
                state.error = null
            })

})

export const movieCardActions = {...movieCardSlice.actions,  loadMovieById}