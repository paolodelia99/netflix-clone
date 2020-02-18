import {
    GET_UP_COMING_MOVIES,
    GET_TOP_RATED_MOVIES,
    GET_POPULAR_MOVIES,
    GET_NOW_PLAYING_MOVIES
} from "./types";
import axios from 'axios'

export const getAllMovies = () => dispatch => {
    dispatch(getMoviesData('popular'))
    dispatch(getMoviesData('top Rated'))
    dispatch(getMoviesData('now Playing'))
    dispatch(getMoviesData('up Coming'))
};

const getMoviesData = (keyword) => async dispatch => {
    let moviesList = [];

    try{
        let res;

        switch (keyword) {
            case 'popular':
                res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1');
                break;
            case 'top Rated':
                res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1');
                break;
            case 'now Playing':
                res = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1')
                break;
            case 'up Coming':
                res = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1\n')
                break;
            default:
                res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1');
        }

        const data = res.data;

        for(let key in data['results']){
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

        switch (keyword) {
            case 'popular':
                dispatch({
                    type: GET_POPULAR_MOVIES,
                    payload: moviesList
                })
                break;
            case 'top Rated':
                dispatch({
                    type: GET_TOP_RATED_MOVIES,
                    payload: moviesList
                });
                break;
            case 'now Playing':
                dispatch({
                    type: GET_NOW_PLAYING_MOVIES,
                    payload: moviesList
                })
                break;
            case 'up Coming':
                dispatch({
                    type: GET_UP_COMING_MOVIES,
                    payload: moviesList
                })
                break;
            default:
                dispatch({
                    type: GET_POPULAR_MOVIES,
                    payload: moviesList
                });
        }

    }catch (e) {
        //fixme: handle error in a proper way
        console.log('Server error')

    }
};