import type {IGenre} from "../../models/GenreModel.ts";
import type {FC} from "react";
import "./GenreBadgeComponent.css"
import {Link} from "react-router-dom";

type PropsType = {
    genre: IGenre;
}

const GenreBadgeComponent:FC<PropsType> = ({genre}) => {
    return (
        <>
            <li className={"badgeLi"}>
                <Link to={"#"} className={"badgeA"}>
                    <div className={"badge"}>{genre.name}</div>
                </Link>
            </li>

        </>
    );
};

export default GenreBadgeComponent;