import {
    SET_CURRENT_MOVIE,
    SET_CURRENT_TV_SHOW,
    TAKE_OUT_CURRENT_MOVIE,
    TAKE_OUT_CURRENT_TV_SHOW
} from "../actions/types";

export const setCurrentMovie = currentMovie => dispatch => {
    dispatch({
        type: SET_CURRENT_MOVIE,
        payload: currentMovie
    })
};

export const setCurrentTvShow = currentTvShow => dispatch => {
    dispatch({
        type: SET_CURRENT_TV_SHOW,
        payload: currentTvShow
    })
};

export const takeOutEveryThing = () => dispatch => {
    dispatch(takeOutCurrentMovie())
    dispatch(takeOutCurrentTvShow())
};

const takeOutCurrentMovie = () => dispatch => {
    dispatch({
        type: TAKE_OUT_CURRENT_MOVIE,
    })
}

const takeOutCurrentTvShow = () => dispatch => {
    dispatch({
        type: TAKE_OUT_CURRENT_TV_SHOW,
    })
}