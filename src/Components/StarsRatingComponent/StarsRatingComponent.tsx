import type {FC} from "react";
import "./StarsRatingComponent.css"
type propsType ={
    vote_average: number
}

const StarsRatingComponent:FC<propsType> = ({vote_average}) => {
    const ratingOfFive = vote_average / 2;
    const percent = (ratingOfFive / 5) * 100;

    return (

        <div className="stars-rating-wrapper" title={`rating: ${vote_average}`}>
            <div className="stars-empty">★★★★★</div>
            <div className="stars-filled" style={{ width: `${percent}%` }}>
                ★★★★★
            </div>


        </div>
    );
};

export default StarsRatingComponent;