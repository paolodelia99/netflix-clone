import React, {useLayoutEffect, useRef} from 'react';

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllMovies} from "../../actions/movies";

import {Col, Row} from "reactstrap";
import ItemSlider from "../ItemsSlider";


const MoviesPage = (
    {
        movies:
            {
                popularMovies,
                nowPlayingMovies,
                topRatedMovies,
                upComingMovies
            },
        getAllMovies
    }) => {
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getAllMovies();
            return;
        }

    },[]);

    return (
        <div className='page-container'>
            <Row className='category-wrapper first-category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Popular Movies</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {popularMovies.length ? <ItemSlider children={popularMovies} type={'movies'}/> : <p>nothhing to show here</p>}
                </Col>
            </Row>
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Now Playing</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {nowPlayingMovies.length ? <ItemSlider children={nowPlayingMovies} type={'movies'}/> : <p>nothhing to show here</p>}
                </Col>
            </Row>
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Airing Today TV Shows</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {topRatedMovies.length ? <ItemSlider children={topRatedMovies} type={'movies'}/> : <p>nothhing to show here</p>}
                </Col>
            </Row>
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Up Coming</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {upComingMovies.length ? <ItemSlider children={upComingMovies} type={'movies'}/> : <p>nothhing to show here</p>}
                </Col>
            </Row>
        </div>
    );
};

MoviesPage.propTypes = {
    movies: PropTypes.object.isRequired,
    getAllMovies: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    movies: state.movies
});

export default connect(mapStateToProps,{getAllMovies})(MoviesPage);