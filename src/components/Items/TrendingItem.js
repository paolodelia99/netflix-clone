import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const TrendingItem = ({trendItem}) => {
    return (
        <div>
            <div className="card bg-dark text-white item">
                <img src={`https://image.tmdb.org/t/p/w154${trendItem.posterPath}`} className="card-img" alt="..." />
            </div>
        </div>
    );
};

TrendingItem.propTypes = {
    trendItem: PropTypes.object.isRequired
}

export default TrendingItem;