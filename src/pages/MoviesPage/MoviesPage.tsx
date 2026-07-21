
import "./MoviesPage.css"
import MoviesListComponent from "../../Components/MoviesListComponent/MoviesListComponent.tsx";
import GenresBadgesComponent from "../../Components/GenresBadgesComponent/GenresBadgesComponent.tsx";



const MoviesPage = () => {



    return (
        <div className={"moviesPage"}>
            <GenresBadgesComponent/>
            <MoviesListComponent/>
        </div>
    );
};

export default MoviesPage;