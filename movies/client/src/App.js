import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from "./movies/Home";
import MovieList from "./movies/MovieList";
import Ratings from "./movies/Ratings";
import MovieReview from "./movies/MovieReview";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <nav>
          <Link to="/">home</Link> <Link to="/movies">Movies</Link>{" "}
          <Link to="/ratings ">ratings</Link>
        </nav>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={MovieList} />
            <Route path="/ratings" component={Ratings} />
            <Route path="/movies/:movie_id/ratings" component={MovieReview} />
          </Switch>
        </div>
        {this.props.children}
      </div>
    );
  }
}
export default App;
