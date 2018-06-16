import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import GetMovieReviews from "./GetMovieReviews"

class Select extends React.Component {
  render() {
    const { name, values, handleSelect } = this.props;
    const displayValues = ["", ...values];

    return (
      <select onChange={handleSelect} name={name}>
        {displayValues.map(val => <option value={val}>{val}</option>)}
      </select>
    );
  }
}

class MovieReviewInputs extends React.Component {
  constructor(props) {
    super(props);
    this.arr = [1, 2, 3, 4, 5];
    this.state = {
      rating:'',
      review_text:''
    };
  }

  handleSelectrating = e => {
    this.setState({
      rating: e.target.value
    });
  };

  handleSelectText = e => {
    this.setState({
      review_text: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/movies/createReview`, {
        rating: this.state.rating,
        review_text: this.state.review_text,
        movie_id: this.props.movie_id
      })
      .then(res => {
        this.props.updateReviews({rating: this.state.rating, review_text: this.state.review_text})
       })
      .catch(err => {
        console.log(err);
      });
  }
 
  

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="review_text"
            value={this.state.review_text}
            onChange={this.handleSelectText}
          />

          <Select
            name="rating"
            values={this.arr}
            handleSelect={this.handleSelectrating}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );

  }
}

export default MovieReviewInputs;
