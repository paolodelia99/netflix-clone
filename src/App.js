import React, {Fragment} from 'react';
import {BrowserRouter as Routes, Route, Switch} from "react-router-dom";
import './App.css';
import AppNavbar from "./components/Layout/AppNavbar";
import HomePage from "./components/DashBoard/HomePage";
import MoviesPage from "./components/DashBoard/MoviesPage";
import TvShowsPage from "./components/DashBoard/TvShowsPage";
import SearchPage from "./components/SearchPage";
//Redux
import {Provider} from 'react-redux';
import store from "./store";

function App() {
  return (
      <Provider store={store}>
          <Routes>
              <Fragment>
                  <AppNavbar/>
                  <Switch>
                      <Route exact path='/' component={HomePage}/>
                      <Route exact path='/movies' component={MoviesPage}/>
                      <Route exact path='/tv-shows' component={TvShowsPage}/>
                      <Route exact path='/search/:keyword' component={SearchPage}/>
                  </Switch>
              </Fragment>
          </Routes>
      </Provider>
  );
}

export default App;
