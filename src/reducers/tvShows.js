import {
    GET_POPULAR_TV_SHOWS,
    GET_TOP_RATED_TV_SHOWS,
    GET_TV_AIRING_TODAY,
    GET_TV_ON_AIR
} from "../actions/types";

const initalState = {
    popularTvShows: null,
    topRatedTvShows: null,
    airingTodayTvShows: null,
    onAirTvShows: null
};

export default function (state=initalState,action) {
    const {type,payload} = action;

    switch (type) {
        case GET_TV_ON_AIR:
            return{
                ...state,
                onAirTvShows: payload
            };
        case GET_TV_AIRING_TODAY:
            return {
                ...state,
                airingTodayTvShows: payload
            };
        case GET_TOP_RATED_TV_SHOWS:
            return {
                ...state,
                topRatedTvShows: payload
            };
        case GET_POPULAR_TV_SHOWS:
            return {
                ...state,
                popularTvShows: payload
            }
        default:
            return state;
    }
}