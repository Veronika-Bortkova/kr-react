import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout.tsx";
import MoviesPage from "../pages/MoviesPage/MoviesPage.tsx";
import MoviesWithGenerPage from "../pages/MoviesWithGenerPage.tsx";
import MovieCardPage from "../pages/MovieCardPage.tsx";
import MovieSearchdPage from "../pages/MovieSearchdPage.tsx";

export const routes = createBrowserRouter([
    {path:"/", element:<MainLayout/>, children:[
            {index:true, element: <MoviesPage/>},
            {path:"muvies_of_genere:genreId", element:<MoviesWithGenerPage/>},
            {path: "muviesCard:movieId",element:<MovieCardPage/>},
            {path:"muvies_of_search:search", element: <MovieSearchdPage/> }
        ] }
])