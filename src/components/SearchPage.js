import React from 'react';
//Redux
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import MovieItem from "./Items/MovieItem";
import TvShowItem from "./Items/TvShowItem";
import LoadingPage from "./Layout/LoadingPage";

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

    const moviesList = searchedMovies.map(movie => (
        <MovieItem key={movie.id} movieItem={movie} fromSearchPage={true}/>
    ))

    const tvShowList = searchedTvShows.map(tvShow => (
        <TvShowItem key={tvShow.id} tvShowItem={tvShow} fromSearchPage={true}/>
    ))


    return (
        <div className='search-page-big-wrapper'>
            {
                searchedMovies.length && !areMoviesLoading ?
                    <div className='result-big-wrapper'>
                        <div className='search-title-container'>
                            <header>
                                <h3 className='netflix-text-color'>Movies</h3>
                            </header>
                        </div>
                        <div className='searched-items-wrapper'>
                            {moviesList}
                        </div>
                    </div> : null
            }
            {
                searchedTvShows.length && !areTvShowsLoading ?
                <div className="result-big-wrapper">
                    <div className='search-title-container'>
                        <header>
                            <h3 className='netflix-text-color'>Tv Shows</h3>
                        </header>
                    </div>
                    <div className="searched-items-wrapper">
                        {tvShowList}
                    </div>
                </div> : null
            }
        </div>
    );
};

const mapStateToProps = state => ({
    searchResult: state.searchResult
})

export default connect(mapStateToProps)(SearchPage);