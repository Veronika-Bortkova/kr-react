
import "./MoviesPage.css"
import GenresComponent from "../../Components/GenresBadgesComponent/GenresBadgesComponent.tsx";
import MoviesListComponent from "../../Components/MoviesListComponent/MoviesListComponent.tsx";



const MoviesPage = () => {



    return (
        <div className={"moviesPage"}>
            <GenresComponent/>
             <MoviesListComponent/>
        </div>
    );
};

export default MoviesPage;