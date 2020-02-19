import {combineReducers} from "redux";
import movies from "./movies";
import trending from "./trending";
import tvShows from "./tvShows";
import searchResult from "./searchResult";
import selectedItems from "./selectedItems";

export default combineReducers({
    movies,
    trending,
    tvShows,
    searchResult,
    selectedItems
})