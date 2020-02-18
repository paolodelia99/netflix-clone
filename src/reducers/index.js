import {combineReducers} from "redux";
import movies from "./movies";
import trending from "./trending";
import tvShows from "./tvShows";
import searchResult from "./searchResult";

export default combineReducers({
    movies,
    trending,
    tvShows,
    searchResult
})