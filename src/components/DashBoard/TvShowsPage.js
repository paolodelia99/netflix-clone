import React, {useLayoutEffect, useRef} from 'react';

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllTvShows} from "../../actions/tvShows";

import {Col, Row, Spinner} from "reactstrap";
import ItemSlider from "../ItemsSlider";

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
                    {popularTvShows.length ? <ItemSlider children={popularTvShows} type={'tvShows'}/> : <Spinner color="danger" />}
                </Col>
            </Row>
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Top Rated TV Shows</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {topRatedTvShows.length ? <ItemSlider children={topRatedTvShows} type={'tvShows'}/> : <Spinner color="danger" />}
                </Col>
            </Row>
           {airingTodayTvShows.length ? <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>Airing Today TV Shows</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {airingTodayTvShows.length ? <ItemSlider children={airingTodayTvShows} type={'tvShows'}/> : null}
                </Col>
            </Row> : null}
            <Row className='category-wrapper'>
                <div className='title-container'>
                    <header>
                        <h3>On Air TV Shows</h3>
                    </header>
                </div>
                <Col className='slider-container'>
                    {onAirTvShows.length ? <ItemSlider children={onAirTvShows} type={'tvShows'}/> : <Spinner color="danger" />}
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