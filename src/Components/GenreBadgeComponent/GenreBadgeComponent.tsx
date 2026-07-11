import type {IGenre} from "../../models/GenreModel.ts";
import type {FC} from "react";

type PropsType = {
    genre: IGenre;
}

const GenreBadgeComponent:FC<PropsType> = ({genre}) => {
    return (
        <>
            <li><div className={"badge"}>{genre.name}</div></li>

        </>
    );
};

export default GenreBadgeComponent;