import React from 'react';
import PropTypes from 'prop-types'

const TvShowItem = ({tvShowItem}) => {
    return (
        <div>
            <div className="card bg-dark text-white item">
                <img src={`https://image.tmdb.org/t/p/w500${tvShowItem.posterPath}`} className="card-img" alt="..." />
            </div>
        </div>
    );
};

TvShowItem.propTypes = {
    tvShowItem: PropTypes.object.isRequired
}

export default TvShowItem;