import React, {useLayoutEffect, useRef} from 'react';

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllTvShows} from "../../actions/tvShows";

import {Col, Row, Spinner} from "reactstrap";
import ItemSlider from "../ItemsSlider";
import LoadingPage from "../Layout/LoadingPage";
import {Animated} from "react-animated-css";

const TvShowsPage = (
    {
        tvShows:
            {
                popularTvShows,
                arePopularLoading,
                topRatedTvShows,
                areTopRatedLoading,
                airingTodayTvShows,
                areAiringTodayLoading,
                onAirTvShows,
                areOnAirLoading
            },
        getAllTvShows
    }) => {
    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            getAllTvShows();
            return;
        }

    },[]);

    return (
        <div className='page-container'>
            <Row className='category-wrapper first-category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Popular TV Shows</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {
                        popularTvShows.length ?
                            <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                                <ItemSlider children={popularTvShows} type={'tvShows'}/>
                            </Animated>
                            :
                            <LoadingPage/>
                    }
                </Col>
            </Row>
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Top Rated TV Shows</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {
                        topRatedTvShows.length ?
                            <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                                <ItemSlider children={topRatedTvShows} type={'tvShows'}/>
                            </Animated>
                            :
                            <LoadingPage/>
                    }
                </Col>
            </Row>
           {airingTodayTvShows.length ? <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Airing Today TV Shows</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {
                        airingTodayTvShows.length ?
                            <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                                <ItemSlider children={airingTodayTvShows} type={'tvShows'}/>
                            </Animated>
                            :
                            null
                    }
                </Col>
            </Row> : null}
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>On Air TV Shows</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {
                        onAirTvShows.length ?
                            <Animated animationIn="fadeIn" animationOut="fadeOutDown" animationInDuration={3000} animationOutDuration={1000} isVisible={true}>
                                <ItemSlider children={onAirTvShows} type={'tvShows'}/>
                            </Animated>
                            :
                            <LoadingPage/>
                    }
                </Col>
            </Row>
        </div>
    );
};

TvShowsPage.propTypes = {
    tvShows: PropTypes.object.isRequired,
    getAllTvShows: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    tvShows: state.tvShows
});

export default connect(mapStateToProps,{getAllTvShows})(TvShowsPage);