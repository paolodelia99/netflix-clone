import React,{useRef,useLayoutEffect} from 'react';
// Redux imports
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllMovies} from "../../actions/movies";
import {getTrendings} from "../../actions/trendings";
import {getAllTvShows} from "../../actions/tvShows";

const HomePage =
    ({
         movies,
         tvShows,
         trending,
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
        <div>
            <p>Home Page</p>
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