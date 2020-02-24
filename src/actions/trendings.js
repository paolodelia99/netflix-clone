import {GET_TRENDINGS} from "./types";
import axios from "axios";

export const getTrendings = () => async dispatch => {
    let trendingList = []

    try{
        const res = await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=d00af0decd09caba18f91c6f78bd9936')

        const data = res.data;
        console.log(data)

        for(let key in data['results']){
            let trendingItem = {}

            if(data['results'][key].hasOwnProperty('title'))
                trendingItem.title = data['results'][key]['title']
            else
                trendingItem.name = data['results'][key]['name']

            trendingItem.id = data['results'][key]['id']
            trendingItem.overview = data['results'][key]['overview']
            trendingItem.popularity = data['results'][key]['popularity']
            trendingItem.voteAverage = data['results'][key]['vote_average']
            trendingItem.voteCount = data['results'][key]['vote_count']
            trendingItem.posterPath = data['results'][key]['poster_path']
            trendingItem.releaseDate = data['results'][key]['release_date']
            trendingItem.mediaType = data['results'][key]['media_type']

            trendingList.push(trendingItem)
        }

        dispatch({
            type: GET_TRENDINGS,
            payload: trendingList
        })

    }catch (e) {
        //fixme: handle error in a proper way
        console.log('Server error')
    }
}