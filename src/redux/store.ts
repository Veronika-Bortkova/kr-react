import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./slices/movieSlice.ts";
import {genreSlice} from "./slices/genreSlice.ts";
import {movieWithGenreSlice} from "./slices/movieWithGenreSlice.ts";
import {movieSearchSlice} from "./slices/movieSearchSlice.ts";

export const store = configureStore({
    reducer: {
        movieStoreSlice: movieSlice.reducer,
        genreStoreSlice: genreSlice.reducer,
        movieWithGenreStoreSlice: movieWithGenreSlice.reducer,
        movieSearchStoreSlice: movieSearchSlice.reducer,
    }
})

