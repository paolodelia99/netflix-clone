import {
    GET_NOW_PLAYING_MOVIES,
    GET_POPULAR_MOVIES,
    GET_TOP_RATED_MOVIES,
    GET_UP_COMING_MOVIES
} from "../actions/types";

const initialState = {
    popularMovies: null,
    nowPlayingMovies: null,
    topRatedMovies: null,
    upComingMovies: null
};

export default function (state=initialState, action) {
    const {type,payload} = action;

    switch (type) {
        case GET_POPULAR_MOVIES:
            return{
                ...state,
                popularMovies: payload
            };
        case GET_NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowPlayingMovies: payload
            }
        case GET_TOP_RATED_MOVIES:
            return{
                ...state,
                topRatedMovies: payload
            };
        case GET_UP_COMING_MOVIES:
            return {
                ...state,
                upComingMovies: payload
            };
        default:
            return state
    }
}