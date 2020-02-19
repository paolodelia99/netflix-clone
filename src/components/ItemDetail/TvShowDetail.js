import React from 'react';
import PropTypes from 'prop-types';
import {connect } from 'react-redux'

const TvShowDetail = ({currentTvShow}) => {
    return (
        <div className='page-detail-wrapper netflix-text-color'>
            <div className='current-movie-title'>
                <header>
                    <h2 className='display-3"'>{currentTvShow.name}</h2>
                </header>
            </div>
            <div className='detail-info-wrapper'>
                <div className='current-movie-img-container'>
                    <img src={`https://image.tmdb.org/t/p/w500${currentTvShow.posterPath}`} className='img'/>
                </div>
                <div className='movie-item-info-container'>
                    <div>
                        <h4>Popularity</h4>
                        <p className='text-white-50'>{currentTvShow.popularity}</p>
                    </div>
                    <div>
                        <h4>Vote average</h4>
                        <p className='text-white-50'>{currentTvShow.voteAverage}</p>
                    </div>
                    <div>
                        <h4>First Air Date</h4>
                        <p className='text-white-50'>{currentTvShow.firstAirDate}</p>
                    </div>
                    <div>
                        <h4>Overview</h4>
                        <p className='text-white-50'>{currentTvShow.overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

TvShowDetail.propTypes = {
    currentTvShow: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    currentTvShow: state.selectedItems.currentTvShow
})

export default connect(mapStateToProps)(TvShowDetail);