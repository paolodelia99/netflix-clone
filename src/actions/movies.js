import {
    GET_UP_COMING_MOVIES,
    GET_TOP_RATED_MOVIES,
    GET_POPULAR_MOVIES,
    GET_NOW_PLAYING_MOVIES
} from "./types";
import axios from 'axios'

export const getAllMovies = () => dispatch => {
    dispatch(getPopularMovies())
    dispatch(getTopRatedMovies())
    dispatch(getUpcomingMovies())
    dispatch(getNowPlayingMovies())
};

export const getPopularMovies = () => async dispatch => {
    const popularMoviesList = [];
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1')

        const data = res.data;

        for(let key in data['results']){
             let movieItem = {}

            movieItem.title = data['results'][key]['title']
            movieItem.id = data['results'][key]['id']
            movieItem.overview = data['results'][key]['overview']
            movieItem.popularity = data['results'][key]['popularity']
            movieItem.voteCount = data['results'][key]['vote_count']
            movieItem.releaseDate = data['results'][key]['release_date']

            popularMoviesList.push(movieItem)
        }

        dispatch({
            type:GET_POPULAR_MOVIES,
            payload: popularMoviesList
        })
    }catch (e) {
        //fixme: handle error in a proper way
        console.log('Server error')
    }
};

export const getNowPlayingMovies = () => async dispatch => {
    const nowPlayingMoviesList = [];

    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1')

        const data = res.data;

        for(let key in data['results']){
            let movieItem = {};

            movieItem.title = data['results'][key]['title']
            movieItem.id = data['results'][key]['id']
            movieItem.overview = data['results'][key]['overview']
            movieItem.popularity = data['results'][key]['popularity']
            movieItem.voteAverage = data['results'][key]['vote_average']
            movieItem.releaseDate = data['results'][key]['release_date']

            nowPlayingMoviesList.push(movieItem)
        }

        dispatch({
            type:GET_NOW_PLAYING_MOVIES,
            payload: nowPlayingMoviesList
        })
    }catch (e) {
        //fixme: handle error in a proper way
        console.log('Server error')
    }
};

export const getTopRatedMovies = () => async dispatch => {
    const topRatedMoviesList = [];

    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1')

        const data = res.data;

        for(let key in data['results']){
            let movieItem = {}

            movieItem.title = data['results'][key]['title']
            movieItem.id = data['results'][key]['id']
            movieItem.overview = data['results'][key]['overview']
            movieItem.popularity = data['results'][key]['popularity']
            movieItem.voteCount = data['results'][key]['vote_count']
            movieItem.releaseDate = data['results'][key]['release_date']

            topRatedMoviesList.push(movieItem)
        }

        dispatch({
            type:GET_TOP_RATED_MOVIES,
            payload: topRatedMoviesList
        })
    }catch (e) {
        //fixme: handle error in a proper way
        console.log('Server error')
    }
};

export const getUpcomingMovies = () => async dispatch => {
    const upComingMoviesList = [];

    try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1\n')

        const data = res.data;

        for(let key in data['results']){
            let movieItem = {}

            movieItem.title = data['results'][key]['title']
            movieItem.id = data['results'][key]['id']
            movieItem.overview = data['results'][key]['overview']
            movieItem.popularity = data['results'][key]['popularity']
            movieItem.voteCount = data['results'][key]['vote_count']
            movieItem.releaseDate = data['results'][key]['release_date']

            upComingMoviesList.push(movieItem)
        }

        dispatch({
            type:GET_UP_COMING_MOVIES,
            payload: upComingMoviesList
        })
    }catch (e) {
        //fixme: handle error in a proper way
        console.log('Server error')
    }
};