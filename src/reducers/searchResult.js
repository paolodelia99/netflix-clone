import {
    GET_SEARCH_TV_SHOWS,
    GET_SEARCH_MOVIES
} from "../actions/types";

const initialState = {
    searchedMovies: [],
    areMoviesLoading: true,
    searchedTvShows: [],
    areTvShowsLoading: true
};

export default function (state=initialState,action) {
    const {type,payload} = action;

    switch (type) {
        case GET_SEARCH_MOVIES:
            return{
                ...state,
                searchedMovies: payload,
                areMoviesLoading: false
            }
        case GET_SEARCH_TV_SHOWS:
            return {
                ...state,
                searchedTvShows: payload,
                areTvShowsLoading: false
            }
        default:
            return state
    }
}