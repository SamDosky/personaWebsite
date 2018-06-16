import React,{ Component} from "react";
import { Route, Link, Switch} from "react-router-dom";
import axios from "axios";
import MovieReview from "./MovieReview";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }


  componentDidMount() {
    axios
      .get("/movies")
      .then(res => {
        this.setState({
          movies: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="MovieList">
        <h1>All Disney Movies</h1>
          <ul>
            {this.state.movies.map(movie => (
              <li  key={movie.id}>
                <Link to={`/movies/${movie.id}/ratings`} >{movie.title}</Link>
              </li>
            ))}
          </ul>
      </div>
    );
  }
}

export default MovieList;
