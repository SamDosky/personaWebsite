import React, { Component } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import MovieList from "./MovieList";
import MovieReviewInputs from "./MovieReviewInputs"
import GetMovieReviews from "./GetMovieReviews"
 
class MovieReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieReview: [],
      movie:'',
      movie_id:props.match.params.movie_id
    };
  }

  componentDidMount() {
    this.props.getComments
    axios
      .get(`/movies/${this.props.match.params.movie_id}`)

      .then(res => {
        this.setState({
          movie: res.data.data.title
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Can pass this as a prop to have child update state

  updateReviews = (review) => {
    this.setState({ 
      movieReview: [...this.state.movieReview, review]
    })
  }


  render() {
    return (
          
      <div className="MovieList moviereview">

        {this.state.movie}
                
        {this.state.movieReview.map(review => (
          <li>
            {" "}
            {review.review_text} {" .............  "} {review.rating}{" "}
          </li>
        ))}



       < MovieReviewInputs movie_id = {this.state.movie_id} updateReviews={this.updateReviews}/>
       < GetMovieReviews movie_id = {this.state.movie_id} />
       
      </div>
    );
  }
}

export default MovieReview;
