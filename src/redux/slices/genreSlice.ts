import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IGenreObj} from "../../models/GenreModel.ts";
import {getGenres} from "../../services/api.service.ts";

type genreSliceType ={
    genres: IGenreObj;
}
const loadGenres =createAsyncThunk("loadGenres", async (_,thunkAPI)=>{
    const genres = await getGenres();
    return thunkAPI.fulfillWithValue(genres);
})
export const initGenreSliceState:genreSliceType = {genres:{genres:[]}};
export const genreSlice = createSlice({
    name: "genreSlice",
    initialState: initGenreSliceState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadGenres.fulfilled, (state, action:PayloadAction<IGenreObj>)=>{
            state.genres = action.payload

        })

})

export const genreActions = {...genreSlice.actions, loadGenres}