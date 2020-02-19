import {
    SET_CURRENT_MOVIE,
    SET_CURRENT_TV_SHOW,
    TAKE_OUT_CURRENT_MOVIE,
    TAKE_OUT_CURRENT_TV_SHOW
} from "../actions/types";

const initialState = {
    currentMovie: null,
    currentTvShow: null
};

export default function (state=initialState,action) {
    const {type,payload} = action;

    switch (type) {
        case SET_CURRENT_MOVIE:
            return {
                ...state,
                currentMovie: payload
            }
        case SET_CURRENT_TV_SHOW:
            return {
                ...state,
                currentTvShow: payload
            }
        case TAKE_OUT_CURRENT_MOVIE:
            return {
                ...state,
                currentMovie: null
            }
        case TAKE_OUT_CURRENT_TV_SHOW:
            return {
                ...state,
                currentTvShow: null
            }
        default:
            return state
    }
}