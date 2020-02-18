import {GET_TRENDINGS} from "../actions/types";

const initialState = {
    trendingList: [],
    isLoading: true
};

export default function (state=initialState,action) {
    const {type,payload} = action;

    if(type === GET_TRENDINGS){
        return {
            ...state,
            trendingList: payload,
            isLoading: false
        }
    }else{
        return state
    }
}