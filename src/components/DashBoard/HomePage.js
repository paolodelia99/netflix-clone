import React,{useRef,useLayoutEffect} from 'react';
// Redux imports
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllMovies} from "../../actions/movies";
import {getTrendings} from "../../actions/trendings";
import {getAllTvShows} from "../../actions/tvShows";
//Other components imports
import {Col, Row, Spinner} from "reactstrap";
import ItemSlider from "../ItemsSlider";
import LoadingPage from "../Layout/LoadingPage";
import {Animated} from "react-animated-css";

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

    return (
        <div className='page-container'>
            <Row className='category-wrapper first-category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Trending Now</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {trendingList.length ?
                        <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                            <ItemSlider children={trendingList} type={'trending'}/>
                        </Animated>
                        :
                        <LoadingPage/>
                    }
                </Col>
            </Row>
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Popular Movies</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {
                        popularMovies ?
                            <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                                <ItemSlider children={popularMovies} type={'movies'}/>
                            </Animated>
                        :
                        <LoadingPage/>}
                </Col>
            </Row>
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Popular Tv Shows</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {
                        popularTvShows ?
                            <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                                <ItemSlider children={popularTvShows} type={'tvShows'}/>
                            </Animated>
                             :
                            <LoadingPage/>}
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