import React, { Component } from "react";
import axios from "axios";

class People extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      name: "",
      character: [],
      movies: [],
      movie: ""
    };
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
    console.log("value ;- ", e.target.value);
  };

  handleSubmit = () => {
    axios
      .get(`https://ghibliapi.herokuapp.com/people`)
      .then(res => {
        this.setState({
          characters: res.data
        });
      })
      .then(res => {
        this.setState({
          character: this.state.characters.filter(
            person => person.name.toLowerCase() === this.state.name.toLowerCase()             
          )
        });
      })
      .then(res => {
        this.setState({
          name: ""
        });
      });
  };

  render() {
    { this.state.character}

    return (
      <div className="container">
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <button onClick={this.handleSubmit}>check</button>
        <ul>
        {(this.state.character.length > 0 ? this.state.character.map(person => (
          <li>
            {" "}
            Name ;-  {person.name}<br />
            {"      "}
            Age ;-  {person.age} <br /> Gender ;-  {person.gender} <br />  Film ;-  {person.films}
          </li>
        )): "not found" )}
        </ul>
      </div>
    );
  }
}

export default People;
