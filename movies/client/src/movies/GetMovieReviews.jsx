import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import MovieReview from "./MovieReview";



class GetMovieReviews extends React.Component {
  constructor() {
    super();

    this.state = {
        movieReviews:[]
    };
  }


  updateReview = (review) => {
    this.setState({
      movieReview: [...this.state.movieReview, review]
    })
  }

  componentDidMount() {
    this.getComments();
  }
  
  getComments(){
    axios
      .get(`/movies/review/${this.props.movie_id}`)
      .then(res => {
        this.setState({
          movieReviews: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }


  render() {
      console.log(this.props.movie_id)
    return (
      <div className="MovieList getmoviereviews">
        <ul>
          {this.state.movieReviews.map(movie => (
            <li key={movie.id}>
              {movie.review_text}{'----------------'}{movie.rating} 
            </li>
          ))}
        </ul>

                { () => <MovieReview getComments = { () => this.getComments()}/>}

      </div>

    );
  }

}

export default GetMovieReviews;
