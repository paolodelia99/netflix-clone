import React from 'react';
import PropTypes from "prop-types";


const MovieItem = ({movieItem}) => {
    return (
        <div>
            <div className="card bg-dark text-white item">
                <img src={`https://image.tmdb.org/t/p/w500${movieItem.posterPath}`} className="card-img" />
            </div>
        </div>
    );
};

MovieItem.propTypes = {
    movieItem: PropTypes.object.isRequired
}

export default MovieItem;