import React, {useLayoutEffect, useRef} from 'react';

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllMovies} from "../../actions/movies";

import {Col, Row } from "reactstrap";
import ItemSlider from "../ItemsSlider";
import LoadingPage from "../Layout/LoadingPage";
import {Animated} from "react-animated-css";


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
                    {
                        popularMovies.length ?
                            <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                                <ItemSlider children={popularMovies} type={'movies'}/>
                            </Animated>
                            :
                            <LoadingPage/>
                    }
                </Col>
            </Row>
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Now Playing</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {
                        nowPlayingMovies.length ?
                            <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                                <ItemSlider children={nowPlayingMovies} type={'movies'}/>
                            </Animated>
                            :
                            <LoadingPage/>
                    }
                </Col>
            </Row>
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Top Rated</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {
                        topRatedMovies.length ?
                            <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                                <ItemSlider children={topRatedMovies} type={'movies'}/>
                            </Animated>
                            :
                            <LoadingPage/>
                    }
                </Col>
            </Row>
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Up Coming</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {
                        upComingMovies.length ?
                            <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                                <ItemSlider children={upComingMovies} type={'movies'}/>
                            </Animated>
                            :
                            <LoadingPage/>
                    }
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