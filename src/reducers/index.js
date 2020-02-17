import {combineReducers} from "redux";
import movies from "./movies";
import trending from "./trending";
import tvShows from "./tvShows";

export default combineReducers({
    movies,
    trending,
    tvShows
})