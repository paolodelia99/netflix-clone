import React from 'react';
import PropTypes from 'prop-types';
import DefaultImage from '../../resources/movie.jpg'
import {Animated} from "react-animated-css";

const TvShowItem = ({tvShowItem,fromSearchPage}) => {

    const returnRightImage = () =>(
        fromSearchPage ?
            (

                <div className='searched-item'>
                    <Animated animationIn="zoomIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                        <div className={`card bg-dark text-white`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${tvShowItem.posterPath}`}
                                onError={ e => e.target.src = DefaultImage}
                                className="card-img" alt="..." />
                        </div>
                    </Animated>
                </div>
            ):
            (
                <div>
                    <div className={`card bg-dark text-white`}>
                        <img src={`https://image.tmdb.org/t/p/w500${tvShowItem.posterPath}`} className="card-img" alt="..." />
                    </div>
                </div>
            )
    )

    return (
        returnRightImage()
    );
};

TvShowItem.propTypes = {
    tvShowItem: PropTypes.object.isRequired,
    fromSearchPage: PropTypes.bool.isRequired
}

export default TvShowItem;