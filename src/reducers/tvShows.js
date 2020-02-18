import {
    GET_POPULAR_TV_SHOWS,
    GET_TOP_RATED_TV_SHOWS,
    GET_TV_AIRING_TODAY,
    GET_TV_ON_AIR
} from "../actions/types";

const initalState = {
    popularTvShows: [],
    arePopularLoading: true,
    topRatedTvShows: [],
    areTopRatedLoading: true,
    airingTodayTvShows: [],
    areAiringTodayLoading: true,
    onAirTvShows: [],
    areOnAirLoading: true
};

export default function (state=initalState,action) {
    const {type,payload} = action;

    switch (type) {
        case GET_TV_ON_AIR:
            return{
                ...state,
                onAirTvShows: payload,
                areOnAirLoading: false
            };
        case GET_TV_AIRING_TODAY:
            return {
                ...state,
                airingTodayTvShows: payload,
                areAiringTodayLoading: false
            };
        case GET_TOP_RATED_TV_SHOWS:
            return {
                ...state,
                topRatedTvShows: payload,
                areTopRatedLoading: false
            };
        case GET_POPULAR_TV_SHOWS:
            return {
                ...state,
                popularTvShows: payload,
                arePopularLoading: false
            };
        default:
            return state;
    }
}