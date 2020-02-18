import React,{useRef,useLayoutEffect} from 'react';
// Redux imports
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllMovies} from "../../actions/movies";
import {getTrendings} from "../../actions/trendings";
import {getAllTvShows} from "../../actions/tvShows";

import {Col, Row} from "reactstrap";
import ItemSlider from "../ItemsSlider";

const HomePage =
    ({
         movies: {popularMovies, arePopularMoviesLoading},
         tvShows: {popularTvShows,arePopularLoading},
         trending: {trendingList,isLoading},
         getAllMovies,
        getTrendings,
        getAllTvShows
     }) => {
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getAllMovies();
            getAllTvShows();
            getTrendings();
            return;
        }

    },[]);

    let trendingItemList = trendingList.map(trendItem => (
        <div className="card bg-dark text-white item" key={trendItem.id}>
            <img src={`https://image.tmdb.org/t/p/w154${trendItem.posterPath}`} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title">{trendItem.title}</h5>
                </div>
        </div>
    ));
/*
    const popularMoviesList = movies.popularMovies && !movies.arePopularLoading ? movies.popularMovies.map(movie => (
        <div className="card bg-dark text-white item">
            <img src={`https://image.tmdb.org/t/p/w154${movie.posterPath}`} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <h5 className="card-title">{movie.title}</h5>
            </div>
        </div>
    )) : null;

    const popularTvShowsList = tvShows.popularTvShows && !tvShows.arePopularLoading ? tvShows.popularTvShows.map(tvShow => (
        <div className="card bg-dark text-white item">
            <img src={`https://image.tmdb.org/t/p/w154${tvShow.posterPath}`} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <h5 className="card-title">{tvShow.name}</h5>
            </div>
        </div>
    )) : null
*/
    return (
        <div className='home-page-container'>
            <Row className='slider-big-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Trending Now</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {trendingList.length ? <ItemSlider children={trendingList} type={'trending'}/> : <p>nothhing to show here</p>}
                </Col>
            </Row>
            <Row className='slider-big-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Popular Movies</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {popularMovies ?
                  <ItemSlider children={popularMovies} type={'movies'}/>
                    : <p>nothing to show here</p>}
                </Col>
            </Row>
            <Row className='slider-big-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Popular Tv Shows</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {popularTvShows ?
                    <ItemSlider children={popularTvShows} type={'tvShows'}/>
                    : <p>nogtignsf</p>}
                </Col>
            </Row>
        </div>
    );
};

HomePage.propTypes = {
    movies: PropTypes.object.isRequired,
    tvShows: PropTypes.object.isRequired,
    trending: PropTypes.object.isRequired,
    getAllTvShows: PropTypes.func.isRequired,
    getTrendings: PropTypes.func.isRequired,
    getAllMovies: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
    movies: state.movies,
    tvShows: state.tvShows,
    trending: state.trending
})

export default connect(
    mapStateToProps,
    {
        getTrendings,
        getAllTvShows,
        getAllMovies
    }
)(HomePage);