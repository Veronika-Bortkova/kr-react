
import "./MoviesPage.css"
import MoviesListComponent from "../../Components/MoviesListComponent/MoviesListComponent.tsx";
import GenresBadgesComponent from "../../Components/GenresBadgesComponent/GenresBadgesComponent.tsx";
import Pagination from "../../Components/pagination/pagination.tsx";



const MoviesPage = () => {



    return (
        <div>
            <div className={"moviesPage"}>
                <GenresBadgesComponent/>
                <MoviesListComponent/>
            </div>
            <Pagination/>
        </div>
    );
};

export default MoviesPage;