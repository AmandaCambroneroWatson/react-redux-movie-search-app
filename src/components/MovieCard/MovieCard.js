import React from 'react';
import { Link } from "react-router-dom";
import "./MovieCard.scss";

const MovieCard = (props) => {
    const { data } = props;
    return (
        <div className="card-item">
            <Link to={`/movie/${data.imdbID}`}>
                <div className="card-inner">
                    <div className="card-top">
                        <img className="image" src={data.Poster} alt={data.Title} />
                        <div class="middle">
                            <div class="text">Movie Details</div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-info">
                            <h4>{data.Title}</h4>
                            <p>Release : {data.Year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MovieCard;