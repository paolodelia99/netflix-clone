import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getSearchResult} from '../../actions/searchResult';

const SearchBar = ({getSearchResult}) => {
    const [keyword,setKeyyword] = useState('');
    useEffect(()=> {
        console.log(keyword)
    },[keyword])

    const onChangeKeyWord = e => {
        setKeyyword(e.target.value)
    }

    const setSearchPage = e => {
        getSearchResult(keyword)
    }

    return (
        <div className='search-bar-wrapper'>
            <div className="input-group md-form form-sm form-1 pl-0 border-dark">
                <div className="input-group-prepend input-group-custom-wrapper">
                  <Link
                      onClick={setSearchPage}
                      to={`/search/${keyword}`}
                      className="input-group-text purple lighten-3 btn-span text-decoration-none"
                      id="basic-text1"
                  >
                     <i className="fa fa-search"/>
                  </Link>
                </div>
                <input className="form-control my-0 py-1 bg-dark text-white"
                       type="text"
                       placeholder="Search"
                       aria-label="Search"
                       onChange={onChangeKeyWord}
                       value={keyword}
                />
            </div>
        </div>
    );
}

SearchBar.propTypes = {
    getSearchResult: PropTypes.func.isRequired
}

export default connect(null,{getSearchResult})(SearchBar);