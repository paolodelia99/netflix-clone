import {
    GET_SEARCH_MOVIES,
    GET_SEARCH_TV_SHOWS
} from "./types";

import axios from 'axios'

export const getSearchResult = (keyword) => dispatch => {
    dispatch(getSearchMovies(keyword))
    dispatch(getSearchTvShows(keyword))
}

const getSearchMovies = (keyowrd) => async dispatch => {
    let moviesList = []

    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&query=${keyowrd}&page=1`)

        const data = res.data;

        for (let key in data['result']){
            let movieItem = {}

            movieItem.title = data['results'][key]['title']
            movieItem.id = data['results'][key]['id']
            movieItem.overview = data['results'][key]['overview']
            movieItem.popularity = data['results'][key]['popularity']
            movieItem.voteCount = data['results'][key]['vote_count']
            movieItem.voteAverage = data['results'][key]['vote_average']
            movieItem.releaseDate = data['results'][key]['release_date']
            movieItem.posterPath = data['results'][key]['poster_path']

            moviesList.push(movieItem)
        }

        dispatch({
            type: GET_SEARCH_MOVIES,
            payload: moviesList
        })

    }catch (e) {
        // fixme: handle error in a proper way
        console.log('Server error')
    }
};

const getSearchTvShows = keyword => async dispatch => {
    let tvShowsList = [];

    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&query=${keyword}&page=1`)

        const data = res.data;

        for(let key in data['results']){
            let tvShowItem = {}

            tvShowItem.name = data['results'][key]['name'];
            tvShowItem.posterPath = data['results'][key]['poster_path']
            tvShowItem.id = data['results'][key]['id']
            tvShowItem.overview = data['results'][key]['overview']
            tvShowItem.popularity = data['results'][key]['popularity']
            tvShowItem.voteCount = data['results'][key]['vote_count']
            tvShowItem.firstAirDate = data['results'][key]['first_air_date']

            tvShowsList.push(tvShowItem)
        }

        dispatch({
            type: GET_SEARCH_TV_SHOWS,
            payload: tvShowsList
        })
    }catch (e) {
        // fixme: handle error in a proper way
        console.log('Server error')
    }
}