import React, { Component } from "react";
import ReactDom from "react-dom";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieId: ""
    };
  }

  handleChange = e => {
    this.setState({ movieId: e.target.value });
  };

  componentDidMount() {
    axios.get("https://ghibliapi.herokuapp.com/films/").then(res => {
      this.setState({
        movies: [" ", ...res.data]
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h3> Select a Movie </h3>
        <select name="movieSelect" onChange={this.handleChange}>
          {this.state.movies.map(movie => (
            <option display name="oneSelect" value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>

        {this.state.movies
          .filter(movie => movie.id === this.state.movieId)
          .map(movie => (
            <li>
              {" "}
              Title :-  {movie.title} <br />
              {"      "}
              Release date :-  {movie.release_date} {"      "}<br />
              description :-  {movie.description}{" "}
            </li>
          ))}
      </div>
    );
  }
}

export default Movies;
