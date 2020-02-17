import {GET_TRENDINGS} from "./types";
import axios from "axios";

export const getTrendings = () => async dispatch => {
    let trendingList = []

    try{
        const res = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=d00af0decd09caba18f91c6f78bd9936')

        const data = res.data;

        for(let key in data['results']){
            let trendingItem = {}

            trendingItem.title = data['results'][key]['title']
            trendingItem.id = data['results'][key]['id']
            trendingItem.overview = data['results'][key]['overview']
            trendingItem.popularity = data['results'][key]['popularity']
            trendingItem.voteAverage = data['results'][key]['vote_average']
            trendingItem.voteCount = data['results'][key]['vote_count']
            trendingItem.releaseDate = data['results'][key]['release_date']
            trendingItem.mediaType = data['results'][key]['media_type']

            trendingList.push(trendingItem)
        }

        dispatch({
            type: GET_TRENDINGS,
            payload: trendingList
        })

    }catch (e) {

    }
}