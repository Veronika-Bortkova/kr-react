import "./GenresBadgesComponent.css"
import {useAppGeners} from "../../hooks/useAppGenres.ts";
import GenreBadgeComponent from "../GenreBadgeComponent/GenreBadgeComponent.tsx";

const GenresBadgesComponent = () => {

    const {genres} = useAppGeners();
    return (
        <div>
            <ul>
                {genres.genres.map(genre => <GenreBadgeComponent genre={genre} key={genre.id}/>)}
            </ul>

        </div>
    );
};

export default GenresBadgesComponent;