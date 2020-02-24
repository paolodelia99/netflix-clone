import React from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {setCurrentMovie, setCurrentTvShow} from "../../actions/selectedItems";

const TrendingItem = ({trendItem,setCurrentMovie,setCurrentTvShow}) => {

    const getTheRightLink = (children) => {
      return  trendItem.mediaType === 'movie' ? (
          <Link to={`/movie/${trendItem.title}`} onClick={()=> setCurrentMovie(trendItem)}>
              {children}
          </Link>
      ) : (
          <Link to={`/tv-show/${trendItem.name}`} onClick={()=> setCurrentTvShow(trendItem)}>
              {children}
          </Link>
      )
    };

    return (
        <div>
            <div className="card bg-dark text-white item">
                {getTheRightLink(
                    <img src={`https://image.tmdb.org/t/p/w342${trendItem.posterPath}`} className="card-img" alt="..." />
                )}
            </div>
        </div>
    );
};

TrendingItem.propTypes = {
    trendItem: PropTypes.object.isRequired,
    setCurrentTvShow: PropTypes.func.isRequired,
    setCurrentMovie: PropTypes.func.isRequired
}

export default connect(null,
    {
        setCurrentTvShow,
        setCurrentMovie
    }
    )(TrendingItem);