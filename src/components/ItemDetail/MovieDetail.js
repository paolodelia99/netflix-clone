import React from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux'

const MovieDetail = ({currentMovie}) => {
    return (
        <div className='page-detail-wrapper netflix-text-color'>
            <div className='current-movie-title'>
                <header>
                    <h2 className='display-3"'>{currentMovie.title}</h2>
                </header>
            </div>
            <div className='detail-info-wrapper'>
                <div className='current-movie-img-container'>
                    <img src={`https://image.tmdb.org/t/p/w500${currentMovie.posterPath}`} className='img'/>
                </div>
                <div className='movie-item-info-container'>
                    <div>
                        <h4>Popularity</h4>
                        <p className='text-white-50'>{currentMovie.popularity}</p>
                    </div>
                    <div>
                        <h4>Vote average</h4>
                        <p className='text-white-50'>{currentMovie.voteAverage}</p>
                    </div>
                    <div>
                        <h4>Release date</h4>
                        <p className='text-white-50'>{currentMovie.releaseDate}</p>
                    </div>
                    <div>
                        <h4>Overview</h4>
                        <p className='text-white-50'>{currentMovie.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieDetail.propTypes = {
    currentMovie: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    currentMovie: state.selectedItems.currentMovie
})

export default connect(mapStateToProps)(MovieDetail);