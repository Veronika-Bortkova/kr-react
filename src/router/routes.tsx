import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage/MoviesPage.tsx";
import MoviesWithGenerPage from "../pages/MoviesWithGenerPage.tsx";
import MovieCardPage from "../pages/MovieCardPage/MovieCardPage.tsx";
import MovieSearchdPage from "../pages/MovieSearchdPage.tsx";

export const routes = createBrowserRouter([
    {path:"/", element:<MainLayout/>, children:[
            {index:true, element: <MoviesPage/>},
            {path:"movies_of_genre/:genreId", element:<MoviesWithGenerPage/>},
            {path: "moviesCard/:movieId",element:<MovieCardPage/>},
            {path:"movies_of_search:search", element: <MovieSearchdPage/> }
        ] }
])