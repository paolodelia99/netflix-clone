import {
    GET_POPULAR_TV_SHOWS,
    GET_TOP_RATED_TV_SHOWS,
    GET_TV_AIRING_TODAY,
    GET_TV_ON_AIR
} from "./types";
import axios from 'axios'

export const getAllTvShows = () => dispatch => {
    dispatch(getTvShowsData('popular'))
    dispatch(getTvShowsData('top Rated'))
    dispatch(getTvShowsData('airing Today'))
    dispatch(getTvShowsData('on Air'))
};

const getTvShowsData = (keyword) => async dispatch => {
    let tvShowsList = [];
    try{
        let res;
        switch (keyword) {
            case 'popular':
                res = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1');
                break;
            case 'top Rated':
                res = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1');
                break;
            case 'airing Today':
                res = await axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1');
                break;
            case 'on Air':
                res = await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1');
                break;
            default:
                res = await axios.get('https://api.themoviedb.org/3/tv/popular?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1');
        }

        const data = res.data;

        for(let key in data['results']){
            let tvShowItem = {}

            tvShowItem.name = data['results'][key]['name'];
            tvShowItem.posterPath = data['results'][key]['poster_path']
            tvShowItem.id = data['results'][key]['id']
            tvShowItem.overview = data['results'][key]['overview']
            tvShowItem.popularity = data['results'][key]['popularity']
            tvShowItem.voteAverage = data['results'][key]['vote_average']
            tvShowItem.voteCount = data['results'][key]['vote_count']
            tvShowItem.firstAirDate = data['results'][key]['first_air_date']

            tvShowsList.push(tvShowItem)
        }

        switch (keyword) {
            case 'popular':
                dispatch({
                    type: GET_POPULAR_TV_SHOWS,
                    payload: tvShowsList
                });
                break;
            case 'top Rated':
                dispatch({
                    type: GET_TOP_RATED_TV_SHOWS,
                    payload: tvShowsList
                });
                break;
            case 'airing Today':
                dispatch({
                    type: GET_TV_AIRING_TODAY,
                    payload: tvShowsList
                });
                break;
            case 'on Air':
                dispatch({
                    type: GET_TV_ON_AIR,
                    payload: tvShowsList
                });
                break;
            default:
                dispatch({
                    type: GET_POPULAR_TV_SHOWS,
                    payload: tvShowsList
                });
        }

    }catch (e) {
        //fixme: handle error in a proper way
        console.log('Server error')
    }
};
