import React from 'react';
import {Col, Row, Spinner} from "reactstrap";
//Redux
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const SearchPage = (
    {
        searchResult:
            {
                searchedMovies,
                areMoviesLoading,
                searchedTvShows,
                areTvShowsLoading
            }
    }) => {
    return (
        <div>
            <div className='searched-movies-wrapper'>

            </div>
            <div className="search tv-shows-wrapper">

            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    searchResult: PropTypes.object.isRequired
})

export default connect(mapStateToProps())(SearchPage);