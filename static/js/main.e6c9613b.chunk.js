(this["webpackJsonpfilm-app"]=this["webpackJsonpfilm-app"]||[]).push([[0],{190:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),c=a.n(i),o=(a(95),a(96),a(97),a(8)),l=a(21),s=a(35),u=a(191),m=a(192),p=a(198),d=a(193),v=a(194),h=a(5),g=a(11),E=a.n(g),f=a(16),b=a(10),w=a.n(b),y=function(e){return function(){var t=Object(f.a)(E.a.mark((function t(a){var n,r,i,c,o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.prev=1,t.next=4,w.a.get("https://api.themoviedb.org/3/search/movie?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&query=".concat(e,"&page=1"));case 4:for(c in r=t.sent,i=r.data,console.log(i),i.results)(o={}).title=i.results[c].title,o.id=i.results[c].id,o.overview=i.results[c].overview,o.popularity=i.results[c].popularity,o.voteCount=i.results[c].vote_count,o.voteAverage=i.results[c].vote_average,o.releaseDate=i.results[c].release_date,o.posterPath=i.results[c].poster_path,n.push(o);a({type:"GET_SEARCH_MOVIES",payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log("Server error");case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(f.a)(E.a.mark((function t(a){var n,r,i,c,o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.prev=1,t.next=4,w.a.get("https://api.themoviedb.org/3/search/tv?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&query=".concat(e,"&page=1"));case 4:for(c in r=t.sent,(i=r.data).results)(o={}).name=i.results[c].name,o.posterPath=i.results[c].poster_path,o.id=i.results[c].id,o.overview=i.results[c].overview,o.popularity=i.results[c].popularity,o.voteCount=i.results[c].vote_count,o.firstAirDate=i.results[c].first_air_date,n.push(o);a({type:"GET_SEARCH_TV_SHOWS",payload:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log("Server error");case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},S=Object(h.b)(null,{getSearchResult:function(e){return function(t){t(y(e)),t(O(e))}}})((function(e){var t=e.getSearchResult,a=Object(n.useState)(""),i=Object(s.a)(a,2),c=i[0],l=i[1];Object(n.useEffect)((function(){console.log(c)}),[c]);return r.a.createElement("div",{className:"search-bar-wrapper"},r.a.createElement("div",{className:"input-group md-form form-sm form-1 pl-0 border-dark"},r.a.createElement("div",{className:"input-group-prepend input-group-custom-wrapper"},r.a.createElement(o.b,{onClick:function(e){t(c)},to:"/search/".concat(c),className:"input-group-text purple lighten-3 btn-span text-decoration-none",id:"basic-text1"},r.a.createElement("i",{className:"fa fa-search"}))),r.a.createElement("input",{className:"form-control my-0 py-1 bg-dark text-white",type:"text",placeholder:"Search","aria-label":"Search",onChange:function(e){l(e.target.value)},value:c})))})),T=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),i=a[0],c=a[1];return r.a.createElement("div",null,r.a.createElement(u.a,{color:"dark",light:!0,expand:"md"},r.a.createElement(o.b,{to:"/",className:"custom-nav-bar main-logo text-decoration-none"},"Movie App"),r.a.createElement(m.a,{onClick:function(){return c(!i)}}),r.a.createElement(p.a,{isOpen:i,navbar:!0},r.a.createElement(d.a,{navbar:!0,className:"nav-items-container custom-nav-bar"},r.a.createElement(v.a,{className:"custom-nav-item"},r.a.createElement(o.c,{exact:!0,to:"/",className:"nav-link-text",activeStyle:{fontWeight:"bold"}},"Home")),r.a.createElement(v.a,{className:"custom-nav-item"},r.a.createElement(o.c,{to:"/movies",className:"nav-link-text",activeStyle:{fontWeight:"bold"}},"Movies")),r.a.createElement(v.a,{className:"custom-nav-item"},r.a.createElement(o.c,{to:"/tv-shows",className:"nav-link-text",activeStyle:{fontWeight:"bold"}},"Tv Shows")),r.a.createElement(v.a,{className:"pusher-nav-item"}),r.a.createElement(v.a,{className:"custom-nav-item search-bar-item"},r.a.createElement(S,null))))))},_=function(){return function(e){e(N("popular")),e(N("top Rated")),e(N("now Playing")),e(N("up Coming"))}},N=function(e){return function(){var t=Object(f.a)(E.a.mark((function t(a){var n,r,i,c,o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],t.prev=1,t.t0=e,t.next="popular"===t.t0?5:"top Rated"===t.t0?9:"now Playing"===t.t0?13:"up Coming"===t.t0?17:21;break;case 5:return t.next=7,w.a.get("https://api.themoviedb.org/3/movie/popular?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1");case 7:return r=t.sent,t.abrupt("break",24);case 9:return t.next=11,w.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1");case 11:return r=t.sent,t.abrupt("break",24);case 13:return t.next=15,w.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1");case 15:return r=t.sent,t.abrupt("break",24);case 17:return t.next=19,w.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1\n");case 19:return r=t.sent,t.abrupt("break",24);case 21:return t.next=23,w.a.get("https://api.themoviedb.org/3/movie/popular?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1");case 23:r=t.sent;case 24:for(c in(i=r.data).results)(o={}).title=i.results[c].title,o.id=i.results[c].id,o.overview=i.results[c].overview,o.popularity=i.results[c].popularity,o.voteCount=i.results[c].vote_count,o.voteAverage=i.results[c].vote_average,o.releaseDate=i.results[c].release_date,o.posterPath=i.results[c].poster_path,n.push(o);t.t1=e,t.next="popular"===t.t1?29:"top Rated"===t.t1?31:"now Playing"===t.t1?33:"up Coming"===t.t1?35:37;break;case 29:return a({type:"GET_POPULAR_MOVIES",payload:n}),t.abrupt("break",38);case 31:return a({type:"GET_TOP_RATED_MOVIES",payload:n}),t.abrupt("break",38);case 33:return a({type:"GET_NOW_PLAYING_MOVIES",payload:n}),t.abrupt("break",38);case 35:return a({type:"GET_UP_COMING_MOVIES",payload:n}),t.abrupt("break",38);case 37:a({type:"GET_POPULAR_MOVIES",payload:n});case 38:t.next=43;break;case 40:t.prev=40,t.t2=t.catch(1),console.log("Server error");case 43:case"end":return t.stop()}}),t,null,[[1,40]])})));return function(e){return t.apply(this,arguments)}}()},I=function(){return function(e){e(k("popular")),e(k("top Rated")),e(k("airing Today")),e(k("on Air"))}},k=function(e){return function(){var t=Object(f.a)(E.a.mark((function t(a){var n,r,i,c,o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],t.prev=1,t.t0=e,t.next="popular"===t.t0?5:"top Rated"===t.t0?9:"airing Today"===t.t0?13:"on Air"===t.t0?17:21;break;case 5:return t.next=7,w.a.get("https://api.themoviedb.org/3/tv/popular?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1");case 7:return r=t.sent,t.abrupt("break",24);case 9:return t.next=11,w.a.get("https://api.themoviedb.org/3/tv/top_rated?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1");case 11:return r=t.sent,t.abrupt("break",24);case 13:return t.next=15,w.a.get("https://api.themoviedb.org/3/tv/airing_today?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1");case 15:return r=t.sent,t.abrupt("break",24);case 17:return t.next=19,w.a.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1");case 19:return r=t.sent,t.abrupt("break",24);case 21:return t.next=23,w.a.get("https://api.themoviedb.org/3/tv/popular?api_key=d00af0decd09caba18f91c6f78bd9936&language=en-US&page=1");case 23:r=t.sent;case 24:for(c in(i=r.data).results)(o={}).name=i.results[c].name,o.posterPath=i.results[c].poster_path,o.id=i.results[c].id,o.overview=i.results[c].overview,o.popularity=i.results[c].popularity,o.voteAverage=i.results[c].vote_average,o.voteCount=i.results[c].vote_count,o.firstAirDate=i.results[c].first_air_date,n.push(o);t.t1=e,t.next="popular"===t.t1?29:"top Rated"===t.t1?31:"airing Today"===t.t1?33:"on Air"===t.t1?35:37;break;case 29:return a({type:"GET_POPULAR_TV_SHOWS",payload:n}),t.abrupt("break",38);case 31:return a({type:"GET_TOP_RATED_TV_SHOWS",payload:n}),t.abrupt("break",38);case 33:case 35:return a({type:"GET_TV_AIRING_TODAY",payload:n}),t.abrupt("break",38);case 37:a({type:"GET_POPULAR_TV_SHOWS",payload:n});case 38:t.next=43;break;case 40:t.prev=40,t.t2=t.catch(1),console.log("Server error");case 43:case"end":return t.stop()}}),t,null,[[1,40]])})));return function(e){return t.apply(this,arguments)}}()},x=a(196),A=a(197),P=a(77),R=a(78),D=a(86),M=a(79),C=a(87),j=a(80),V=a.n(j),L=function(e){return function(t){t({type:"SET_CURRENT_MOVIE",payload:e})}},G=function(e){return function(t){t({type:"SET_CURRENT_TV_SHOW",payload:e})}},U=Object(h.b)(null,{setCurrentTvShow:G,setCurrentMovie:L})((function(e){var t,a=e.trendItem,n=e.setCurrentMovie,i=e.setCurrentTvShow;return r.a.createElement("div",null,r.a.createElement("div",{className:"card bg-dark text-white item"},(t=r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w342".concat(a.posterPath),className:"card-img",alt:"..."}),"movie"===a.mediaType?r.a.createElement(o.b,{to:"/movie/".concat(a.title),onClick:function(){return n(a)}},t):r.a.createElement(o.b,{to:"/tv-show/".concat(a.name),onClick:function(){return i(a)}},t))))})),W=a(34),H=a.n(W),Y=a(9),q=Object(h.b)(null,{setCurrentMovie:L})((function(e){var t=e.movieItem,a=e.fromSearchPage,n=e.setCurrentMovie;return a?r.a.createElement("div",{className:"searched-item"},r.a.createElement(Y.Animated,{animationIn:"zoomIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement("div",{className:"card bg-dark text-white ".concat(a?"searched-item":null)},r.a.createElement(o.b,{to:"/movie/".concat(t.title),onClick:function(){return n(t)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.posterPath),onError:function(e){return e.target.src=H.a},className:"card-img",alt:"..."}))))):r.a.createElement("div",null,r.a.createElement("div",{className:"card bg-dark text-white ".concat(a?"searched-item":null)},r.a.createElement(o.b,{to:"/movie/".concat(t.title),onClick:function(){return n(t)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.posterPath),className:"card-img",alt:"..."}))))})),F=Object(h.b)(null,{setCurrentTvShow:G})((function(e){var t=e.tvShowItem,a=e.fromSearchPage,n=e.setCurrentTvShow;return a?r.a.createElement("div",{className:"searched-item"},r.a.createElement(Y.Animated,{animationIn:"zoomIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement("div",{className:"card bg-dark text-white"},r.a.createElement(o.b,{to:"/tv-show/".concat(t.name),onClick:function(){return n(t)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.posterPath),onError:function(e){return e.target.src=H.a},className:"card-img",alt:"..."}))))):r.a.createElement("div",null,r.a.createElement("div",{className:"card bg-dark text-white"},r.a.createElement(o.b,{to:"/tv-show/".concat(t.name),onClick:function(){return n(t)}},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.posterPath),className:"card-img",alt:"..."}))))})),z=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(D.a)(this,(e=Object(M.a)(t)).call.apply(e,[this].concat(i)))).createChildren=function(e,t){switch(e){case"trending":return t.map((function(e){return r.a.createElement(U,{key:e.id,style:{height:250},trendItem:e})}));case"movies":return t.map((function(e){return r.a.createElement(q,{key:e.id,fromSearchPage:!1,style:{height:250},movieItem:e})}));case"tvShows":return t.map((function(e){return r.a.createElement(F,{key:e.id,fromSearchPage:!1,style:{height:250},tvShowItem:e})}));default:return t.map((function(e){return r.a.createElement(U,{key:e.id,style:{height:250},trendItem:e})}))}},a.changeActiveItem=function(e){return a.setState({activeItemIndex:e})},a}return Object(C.a)(t,e),Object(R.a)(t,[{key:"componentWillMount",value:function(){this.setState({activeItemIndex:0})}},{key:"render",value:function(){var e=this.state.activeItemIndex,t=this.props,a=t.children,n=t.type,i=a.length?this.createChildren(n,a):[];return r.a.createElement(V.a,{classes:{wrapper:"customs-slider-big-wrapper",itemsWrapper:"slider-wrapper",itemWrapper:"custom-item-wrapper",itemsInnerWrapper:"custom-inner-items-wrapper",rightChevronWrapper:"right-chevron-wrapper",leftChevronWrapper:"left-chevron-wrapper"},numberOfCards:5,gutter:12,showSlither:!0,firstAndLastGutter:!0,freeScrolling:!1,requestToChangeActive:this.changeActiveItem,activeItemIndex:e,activePosition:"center",chevronWidth:24,rightChevron:">",leftChevron:"<",outsideChevron:!1,infiniteLoop:!0},i)}}]),t}(n.Component),B=a(195),J=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",{style:{margin:"auto",height:"400px",width:"400px",background:"none",color:"white",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(B.a,{color:"danger",style:{width:"3rem",height:"3rem",margin:"auto",display:"block"}}))))},K=Object(h.b)((function(e){return{movies:e.movies,tvShows:e.tvShows,trending:e.trending}}),{getTrendings:function(){return function(){var e=Object(f.a)(E.a.mark((function e(t){var a,n,r,i,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,w.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=d00af0decd09caba18f91c6f78bd9936");case 4:for(i in n=e.sent,r=n.data,console.log(r),r.results)c={},r.results[i].hasOwnProperty("title")?c.title=r.results[i].title:c.name=r.results[i].name,c.id=r.results[i].id,c.overview=r.results[i].overview,c.popularity=r.results[i].popularity,c.voteAverage=r.results[i].vote_average,c.voteCount=r.results[i].vote_count,c.posterPath=r.results[i].poster_path,c.releaseDate=r.results[i].release_date,c.mediaType=r.results[i].media_type,a.push(c);t({type:"GET_TRENDINGS",payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Server error");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},getAllTvShows:I,getAllMovies:_})((function(e){var t=e.movies,a=t.popularMovies,i=(t.arePopularMoviesLoading,e.tvShows),c=i.popularTvShows,o=(i.arePopularLoading,e.trending),l=o.trendingList,s=(o.isLoading,e.getAllMovies),u=e.getTrendings,m=e.getAllTvShows,p=Object(n.useRef)(!0);return Object(n.useLayoutEffect)((function(){if(p.current)return p.current=!1,s(),m(),void u()}),[]),r.a.createElement("div",{className:"page-container"},r.a.createElement(x.a,{className:"category-wrapper first-category-wrapper"},r.a.createElement("div",{className:"title-container"},r.a.createElement("header",null,r.a.createElement("h3",null,"Trending Now"))),r.a.createElement(A.a,{className:"slider-container"},l.length?r.a.createElement(Y.Animated,{className:"animation-wrapper",animationIn:"fadeIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(z,{children:l,type:"trending"})):r.a.createElement(J,null))),r.a.createElement(x.a,{className:"category-wrapper"},r.a.createElement("div",{className:"title-container"},r.a.createElement("header",null,r.a.createElement("h3",null,"Popular Movies"))),r.a.createElement(A.a,{className:"slider-container"},a?r.a.createElement(Y.Animated,{animationIn:"fadeIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(z,{children:a,type:"movies"})):r.a.createElement(J,null))),r.a.createElement(x.a,{className:"category-wrapper"},r.a.createElement("div",{className:"title-container"},r.a.createElement("header",null,r.a.createElement("h3",null,"Popular Tv Shows"))),r.a.createElement(A.a,{className:"slider-container"},c?r.a.createElement(Y.Animated,{animationIn:"fadeIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(z,{children:c,type:"tvShows"})):r.a.createElement(J,null))))})),$=Object(h.b)((function(e){return{movies:e.movies}}),{getAllMovies:_})((function(e){var t=e.movies,a=t.popularMovies,i=t.nowPlayingMovies,c=t.topRatedMovies,o=t.upComingMovies,l=e.getAllMovies,s=Object(n.useRef)(!0);return Object(n.useLayoutEffect)((function(){if(s.current)return s.current=!1,void l()}),[]),r.a.createElement("div",{className:"page-container"},r.a.createElement(x.a,{className:"category-wrapper first-category-wrapper"},r.a.createElement("div",{className:"title-container"},r.a.createElement("header",null,r.a.createElement("h3",null,"Popular Movies"))),r.a.createElement(A.a,{className:"slider-container"},a.length?r.a.createElement(Y.Animated,{animationIn:"fadeIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(z,{children:a,type:"movies"})):r.a.createElement(J,null))),r.a.createElement(x.a,{className:"category-wrapper"},r.a.createElement("div",{className:"title-container"},r.a.createElement("header",null,r.a.createElement("h3",null,"Now Playing"))),r.a.createElement(A.a,{className:"slider-container"},i.length?r.a.createElement(Y.Animated,{animationIn:"fadeIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(z,{children:i,type:"movies"})):r.a.createElement(J,null))),r.a.createElement(x.a,{className:"category-wrapper"},r.a.createElement("div",{className:"title-container"},r.a.createElement("header",null,r.a.createElement("h3",null,"Top Rated"))),r.a.createElement(A.a,{className:"slider-container"},c.length?r.a.createElement(Y.Animated,{animationIn:"fadeIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(z,{children:c,type:"movies"})):r.a.createElement(J,null))),r.a.createElement(x.a,{className:"category-wrapper"},r.a.createElement("div",{className:"title-container"},r.a.createElement("header",null,r.a.createElement("h3",null,"Up Coming"))),r.a.createElement(A.a,{className:"slider-container"},o.length?r.a.createElement(Y.Animated,{animationIn:"fadeIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(z,{children:o,type:"movies"})):r.a.createElement(J,null))))})),Q=Object(h.b)((function(e){return{tvShows:e.tvShows}}),{getAllTvShows:I})((function(e){var t=e.tvShows,a=t.popularTvShows,i=(t.arePopularLoading,t.topRatedTvShows),c=(t.areTopRatedLoading,t.airingTodayTvShows),o=(t.areAiringTodayLoading,t.onAirTvShows),l=(t.areOnAirLoading,e.getAllTvShows),s=Object(n.useRef)(!0);return Object(n.useLayoutEffect)((function(){if(s.current)return s.current=!1,void l()}),[]),r.a.createElement("div",{className:"page-container"},r.a.createElement(x.a,{className:"category-wrapper first-category-wrapper"},r.a.createElement("div",{className:"title-container"},r.a.createElement("header",null,r.a.createElement("h3",null,"Popular TV Shows"))),r.a.createElement(A.a,{className:"slider-container"},a.length?r.a.createElement(Y.Animated,{animationIn:"fadeIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(z,{children:a,type:"tvShows"})):r.a.createElement(J,null))),r.a.createElement(x.a,{className:"category-wrapper"},r.a.createElement("div",{className:"title-container"},r.a.createElement("header",null,r.a.createElement("h3",null,"Top Rated TV Shows"))),r.a.createElement(A.a,{className:"slider-container"},i.length?r.a.createElement(Y.Animated,{animationIn:"fadeIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(z,{children:i,type:"tvShows"})):r.a.createElement(J,null))),c.length?r.a.createElement(x.a,{className:"category-wrapper"},r.a.createElement("div",{className:"title-container"},r.a.createElement("header",null,r.a.createElement("h3",null,"Airing Today TV Shows"))),r.a.createElement(A.a,{className:"slider-container"},c.length?r.a.createElement(Y.Animated,{animationIn:"fadeIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(z,{children:c,type:"tvShows"})):null)):null,r.a.createElement(x.a,{className:"category-wrapper"},r.a.createElement("div",{className:"title-container"},r.a.createElement("header",null,r.a.createElement("h3",null,"On Air TV Shows"))),r.a.createElement(A.a,{className:"slider-container"},o.length?r.a.createElement(Y.Animated,{animationIn:"fadeIn",animationOut:"fadeOutDown",animationInDuration:3e3,animationOutDuration:1e3,isVisible:!0},r.a.createElement(z,{children:o,type:"tvShows"})):r.a.createElement(J,null))))})),X=Object(h.b)((function(e){return{searchResult:e.searchResult}}))((function(e){var t=e.searchResult,a=t.searchedMovies,n=t.areMoviesLoading,i=t.searchedTvShows,c=t.areTvShowsLoading,o=a.map((function(e){return r.a.createElement(q,{key:e.id,movieItem:e,fromSearchPage:!0})})),l=i.map((function(e){return r.a.createElement(F,{key:e.id,tvShowItem:e,fromSearchPage:!0})}));return r.a.createElement("div",{className:"search-page-big-wrapper"},a.length&&!n?r.a.createElement("div",{className:"result-big-wrapper"},r.a.createElement("div",{className:"search-title-container"},r.a.createElement("header",null,r.a.createElement("h3",{className:"netflix-text-color"},"Movies"))),r.a.createElement("div",{className:"searched-items-wrapper"},o)):null,i.length&&!c?r.a.createElement("div",{className:"result-big-wrapper"},r.a.createElement("div",{className:"search-title-container"},r.a.createElement("header",null,r.a.createElement("h3",{className:"netflix-text-color"},"Tv Shows"))),r.a.createElement("div",{className:"searched-items-wrapper"},l)):null)})),Z=a(20),ee=a(84),te=a(85),ae=a(6),ne={popularMovies:[],arePopularLoading:!0,nowPlayingMovies:[],topRatedMovies:[],upComingMovies:[]},re={trendingList:[],isLoading:!0},ie={popularTvShows:[],arePopularLoading:!0,topRatedTvShows:[],areTopRatedLoading:!0,airingTodayTvShows:[],areAiringTodayLoading:!0,onAirTvShows:[],areOnAirLoading:!0},ce={searchedMovies:[],areMoviesLoading:!0,searchedTvShows:[],areTvShowsLoading:!0},oe={currentMovie:null,currentTvShow:null},le=Object(Z.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_POPULAR_MOVIES":return Object(ae.a)({},e,{popularMovies:n});case"GET_NOW_PLAYING_MOVIES":return Object(ae.a)({},e,{nowPlayingMovies:n});case"GET_TOP_RATED_MOVIES":return Object(ae.a)({},e,{topRatedMovies:n});case"GET_UP_COMING_MOVIES":return Object(ae.a)({},e,{upComingMovies:n});default:return e}},trending:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;return"GET_TRENDINGS"===a?Object(ae.a)({},e,{trendingList:n,isLoading:!1}):e},tvShows:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_TV_AIRING_TODAY":return Object(ae.a)({},e,{onAirTvShows:n,areOnAirLoading:!1});case"GET_TV_AIRING_TODAY":return Object(ae.a)({},e,{airingTodayTvShows:n,areAiringTodayLoading:!1});case"GET_TOP_RATED_TV_SHOWS":return Object(ae.a)({},e,{topRatedTvShows:n,areTopRatedLoading:!1});case"GET_POPULAR_TV_SHOWS":return Object(ae.a)({},e,{popularTvShows:n,arePopularLoading:!1});default:return e}},searchResult:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_SEARCH_MOVIES":return Object(ae.a)({},e,{searchedMovies:n,areMoviesLoading:!1});case"GET_SEARCH_TV_SHOWS":return Object(ae.a)({},e,{searchedTvShows:n,areTvShowsLoading:!1});default:return e}},selectedItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_CURRENT_MOVIE":return Object(ae.a)({},e,{currentMovie:n});case"SET_CURRENT_TV_SHOW":return Object(ae.a)({},e,{currentTvShow:n});case"TAKE_OUT_CURRENT_MOVIE":return Object(ae.a)({},e,{currentMovie:null});case"TAKE_OUT_CURRENT_TV_SHOW":return Object(ae.a)({},e,{currentTvShow:null});default:return e}}}),se=[te.a],ue=Object(Z.createStore)(le,{},Object(ee.composeWithDevTools)(Z.applyMiddleware.apply(void 0,se))),me=Object(h.b)((function(e){return{currentMovie:e.selectedItems.currentMovie}}))((function(e){var t=e.currentMovie;return r.a.createElement("div",{className:"page-detail-wrapper netflix-text-color"},r.a.createElement("div",{className:"current-movie-title"},r.a.createElement("header",null,r.a.createElement("h2",{className:'display-3"'},t.title))),r.a.createElement("div",{className:"detail-info-wrapper"},r.a.createElement("div",{className:"current-movie-img-container"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.posterPath),className:"img"})),r.a.createElement("div",{className:"movie-item-info-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Popularity"),r.a.createElement("p",{className:"text-white-50"},t.popularity)),r.a.createElement("div",null,r.a.createElement("h4",null,"Vote average"),r.a.createElement("p",{className:"text-white-50"},t.voteAverage)),r.a.createElement("div",null,r.a.createElement("h4",null,"Release date"),r.a.createElement("p",{className:"text-white-50"},t.releaseDate)),r.a.createElement("div",null,r.a.createElement("h4",null,"Overview"),r.a.createElement("p",{className:"text-white-50"},t.overview)))))})),pe=Object(h.b)((function(e){return{currentTvShow:e.selectedItems.currentTvShow}}))((function(e){var t=e.currentTvShow;return r.a.createElement("div",{className:"page-detail-wrapper netflix-text-color"},r.a.createElement("div",{className:"current-movie-title"},r.a.createElement("header",null,r.a.createElement("h2",{className:'display-3"'},t.name))),r.a.createElement("div",{className:"detail-info-wrapper"},r.a.createElement("div",{className:"current-movie-img-container"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.posterPath),className:"img"})),r.a.createElement("div",{className:"movie-item-info-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Popularity"),r.a.createElement("p",{className:"text-white-50"},t.popularity)),r.a.createElement("div",null,r.a.createElement("h4",null,"Vote average"),r.a.createElement("p",{className:"text-white-50"},t.voteAverage)),r.a.createElement("div",null,r.a.createElement("h4",null,"First Air Date"),r.a.createElement("p",{className:"text-white-50"},t.firstAirDate)),r.a.createElement("div",null,r.a.createElement("h4",null,"Overview"),r.a.createElement("p",{className:"text-white-50"},t.overview)))))}));var de=function(){return r.a.createElement(h.a,{store:ue},r.a.createElement(o.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(T,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:K}),r.a.createElement(l.a,{exact:!0,path:"/movies",component:$}),r.a.createElement(l.a,{exact:!0,path:"/tv-shows",component:Q}),r.a.createElement(l.a,{exact:!0,path:"/search/:keyword",component:X}),r.a.createElement(l.a,{exact:!0,path:"/movie/:movie_name",component:me}),r.a.createElement(l.a,{exact:!0,path:"/tv-show/:tv_show_name",component:pe})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,a){e.exports=a.p+"static/media/movie.49f95281.jpg"},90:function(e,t,a){e.exports=a(190)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.e6c9613b.chunk.js.map